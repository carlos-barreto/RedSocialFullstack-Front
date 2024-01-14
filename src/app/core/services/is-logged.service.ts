import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  public url: string;
  public auth: any = null;


  constructor(
    public _http: HttpClient,
  ) {
    this.url = environment.API_URL;
  }

  checkAuth() {
    this.auth = localStorage.getItem('auth');
    const headerDict = {
      Authorization: `Bearer ${JSON.parse(this.auth).token}`
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this._http.get<any>(`${this.url}/autenticacion/is_logged`, requestOptions);

  }

  // Valida la respuesta de la petición HTTP
  isSomethingValid(response: Observable<any>) {
    return response.pipe(
      map((data: any) => {
        return data.status;
      })
    );
  }
}
