import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public url: string;
  constructor(
    public _http: HttpClient,
  ) {
    this.url = environment.API_URL;
  }


  onSubmitSignIn(formData: object): Observable<any> {

    return this._http.post(`${this.url}/autenticacion/login`, formData);
  }

  onSubmitSignUp(formData: object): Observable<any> {

    return this._http.post(`${this.url}/autenticacion/register`, formData);
  }
}
