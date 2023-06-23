import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrutaModel } from './fruta.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = "http://localhost:3000/frutas/"

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  adicionar(fruta: FrutaModel): Observable<any> {
    return this.http.post(`${this.url}`, fruta);
  }

  atualizar(id: any, fruta: FrutaModel): Observable<any> {
    return this.http.put(`${this.url}`.concat(id), fruta);
  }

  excluir(id: any): Observable<any> {
    return this.http.delete(`${this.url}`.concat(id));
  }
}
