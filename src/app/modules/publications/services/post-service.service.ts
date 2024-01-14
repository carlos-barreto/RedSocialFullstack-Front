import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  public url: string;
  public auth: any = null;


  constructor(
    public _http: HttpClient,
  ) {
    this.url = environment.API_URL;
  }

  onUpload(formData: FormData): Observable<any> {
    this.auth = localStorage.getItem('auth');
    const headerDict = {
      Authorization: `Bearer ${JSON.parse(this.auth).token}`
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this._http.post(`${this.url}/publications/`, formData, requestOptions);
  }

  onGetPosts(){
    this.auth = localStorage.getItem('auth');
    const headerDict = {
      Authorization: `Bearer ${JSON.parse(this.auth).token}`
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this._http.get(`${this.url}/publications/all`,requestOptions);
  }
}
