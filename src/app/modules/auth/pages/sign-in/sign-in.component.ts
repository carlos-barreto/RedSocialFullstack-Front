import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  errorResponse!: String;
  errorResponseStatus!: boolean;
  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router, private _authServiceService: AuthServiceService) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
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
    const { email, password } = this.form.value;

    let body = {email:email, password:password};
    if (this.form.valid) {
      this._authServiceService.onSubmitSignIn(body).subscribe(
        (response) => {
          console.log('Respuesta:', response);
          localStorage.clear()
          localStorage.setItem('auth',JSON.stringify(response))
          this._router.navigate(['/home']);
        },
        (error) => {
          console.error('Error:', error);
          this.errorResponse = error.error.message
          this.errorResponseStatus = true
        }
      );
    }else{

      return;
    }
  }
}
