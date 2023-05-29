import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
Observable
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private url: string = "http://localhost:3000/alunos/";

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
