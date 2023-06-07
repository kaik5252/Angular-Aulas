import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPokService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  private url_evolution:string = "https://pokeapi.co/api/v2/pokemon/evolution-chain/"
  next: string = "";

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  listarMais(): Observable<any> {
    return this.http.get(`${this.next}`);
  }

  getPokemon(url: any): Observable<any> {
    return this.http.get(`${url}`);
  }
}
