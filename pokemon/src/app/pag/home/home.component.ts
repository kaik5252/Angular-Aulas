import { Component, OnInit } from '@angular/core';
import { HttpPokService } from 'src/app/service/http-pok.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonArray: Array<any> = new Array();

  constructor(private service: HttpPokService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe(pokemon => {
      this.service.next = pokemon.next;
      console.log(pokemon);
      for(let i = 0; i < pokemon.results.length; i++) {
        this.detalhes(pokemon.results[i].url);
      }
    }, error => {
      console.log("Erro ao listar os pokémons >>> ", error);
    });
  }

  listarMais() {
    this.service.listarMais().subscribe(pokemon => {
      console.log(pokemon);
      this.service.next = pokemon.next;
    }, error => {
      console.log("Erro ao listar main pokémons >>> ", error);
    });
  }

  detalhes(url: any) {
    this.service.getPokemon(url).subscribe(pokemon => {
      this.pokemonArray.push(pokemon);
      console.log(this.pokemonArray);
    });
  }
}
