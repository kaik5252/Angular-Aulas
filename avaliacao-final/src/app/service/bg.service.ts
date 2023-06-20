import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class BgService {

  private url: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  listarUsuario(user: UserModel): Observable<any> {
    return this.http.post(`${this.url}`, user);
  }
}
