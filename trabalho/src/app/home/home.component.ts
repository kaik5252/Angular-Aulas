import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { FrutaModel } from '../service/fruta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruta: FrutaModel = new FrutaModel();
  frutaArray: Array<any> = new Array();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.httpService.listar().subscribe(frutas => {
      this.frutaArray = frutas;
    }, error => {
      console.log("erro ao listar as frutas >>> " + error);
    });
  }

  atualizar(id: number) {
    this.httpService.atualizar(id, this.fruta).subscribe(frutas => {
      this.fruta = new FrutaModel();
      this.listar();
    }, error => {
      console.log("erro ao atualizar o registro >>> " + error);
    });
  }

  excluir(id: number) {
    this.httpService.excluir(id).subscribe(frutas => {
      this.listar();
    }, error => {
      console.log("erro ao deletar o registro >>> " + error);
    });
  }

  adicionar() {
    this.httpService.adicionar(this.fruta).subscribe(frutas => {
      this.fruta = new FrutaModel();
      this.listar();
    }, error => {
      console.log("erro ao adicionar o registro >>> " + error);
    });
  }
}
