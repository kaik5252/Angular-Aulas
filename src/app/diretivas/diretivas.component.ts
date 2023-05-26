import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  public condicao: boolean = true
  public condicaoClick: boolean = true
  public hoje: string = "Hoje é: 24-05-23"
  public nome1: string = ""
  public total: any = 20
  public date: Date = new Date()

  public list: Array< { nome: string , idade: number } > = [
    { nome: "Carlos Lacerda", idade: 52 },
    { nome: "Roberto Carlos", idade: 87 },
    { nome: "Rogério Rocha", idade: 17 },
  ]

  public list2: Array< any > = [

  ]

  ngOnInit(): void {

  }

  public onClick() {
    if(this.condicaoClick) {
      this.condicaoClick = false
    } else {
      this.condicaoClick = true
    }
  }

  public onClickAdd() {
    this.list.push( { nome: "Nome", idade: 27 } )
  }

  public onClickRemoveList(x:number) {
    this.list.splice(x, 1);
  }

  public save() {
    this.list2.push({ nome: this.nome1 });
    this.nome1 = "";
  }
}
