import { Component, OnInit } from '@angular/core';
import { Publication } from '../../models/publication';
import { SingleCardComponent } from '../../components/publication/single-card/single-card.component';
import { HeaderComponent } from '../../components/publication/header/header.component';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { PostServiceService } from '../../services/post-service.service';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    HeaderComponent,
    SingleCardComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public post: Array<Publication> = [];
  public selectedFile: any = null;
  public auth: any = null;
  public uploadForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  apiKey: string;
  constructor(private fb: FormBuilder, private _postServiceService: PostServiceService) {
    this.apiKey = environment.API_URL;

    // this.post = [
    //   {
    //     id: 34356771,
    //     title: 'Girls of the Cartoon Universe',
    //     description: 'Jhon Doe',
    //     user: 123456789,
    //     date_in: "13/01/2024",
    //     // image: './assets/images/img-01.jpg',
    //     image: environment.API_IMAGES + '/assets/publications/2f341ed4a3a0711850e3490c7c99030e.png',
    //     like: 2
    //   }

    // ];

  }

  ngOnInit(): void {
    this.auth = localStorage.getItem('auth');
    this.getPost();
  }

  getPost() {
    this._postServiceService.onGetPosts().subscribe(
      (response:any) => {
        console.log('post all:', response.data);
        this.post = response.data
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }


  cargarImagen(event: any) {
    if (event.target.files.length > 0) {
      const file = <File>event.target.files[0];
      this.selectedFile = file;
    }
    // console.log(this.selectedFile);
  }


  enviarPost() {
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('title', this.uploadForm.get('title')?.value);
    formData.append('description', this.uploadForm.get('description')?.value);
    formData.append('user', JSON.parse(this.auth).id);
    formData.append('date_in', new Date().toISOString());
    formData.append('like', '0');

    this._postServiceService.onUpload(formData).subscribe(
      (response) => {
        console.log('post subido con éxito:', response);
        this.uploadForm.reset();
        this.selectedFile = null;
        this.post.push(response.post)
      },
      (error) => {
        console.error('Error al subir el post:', error);
      }
    );

  }
}
