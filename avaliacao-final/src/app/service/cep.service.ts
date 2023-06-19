import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Cep {
  cep: string,
  logradouro: string,
  localidade: string,
  bairro: string;
  uf: string,
}

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getCep(cep: any): Observable<Cep> {
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
