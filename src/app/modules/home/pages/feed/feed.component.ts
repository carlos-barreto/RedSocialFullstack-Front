import { Component, OnInit } from '@angular/core';
import { Publication } from '../../../publications/models/publication';
import { SingleCardComponent } from '../../components/single-card/single-card.component';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    SingleCardComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  public post: Array<Publication> = [];
  public selectedFile: any = null;
  public auth: any = null;

  apiKey: string;
  constructor( private _homeService: HomeService) {
    this.apiKey = environment.API_URL;
  }

  ngOnInit(): void {
    this.auth = localStorage.getItem('auth');
    this.getPost();
  }

  getPost() {
    this._homeService.onGetPosts().subscribe(
      (response:any) => {
        console.log('post all:', response.data);
        this.post = response.data
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
