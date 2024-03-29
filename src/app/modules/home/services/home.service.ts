import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public url: string;
  public auth: any = null;


  constructor(
    public _http: HttpClient,
  ) {
    this.url = environment.API_URL;
  }
  onGetPosts(){
    this.auth = localStorage.getItem('auth');
    return this._http.get(`${this.url}/publications/all/public`);
  }
}
