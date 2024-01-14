import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  passwordValid!: boolean;
  errorResponse!: String;
  errorResponseStatus!: boolean;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router, private _authServiceService: AuthServiceService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { firstName, lastName, email, password } = this.form.value;

    let body = { firstName: firstName, lastName: lastName, email: email, password: password };
    if (this.form.valid) {
      this._authServiceService.onSubmitSignUp(body).subscribe(
        (response) => {
          console.log('Respuesta:', response);
          localStorage.clear()
          this._router.navigate(['/auth/sign-in']);
        },
        (error) => {
          console.error('Error:', error);
          this.errorResponse = error.error.message
          this.errorResponseStatus = true
        }
      );
    } else {

      return;
    }
  }
}
