import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private router: Router) {}

  name: string = "";
  email: string = "";
  filme: string = "";

  contatoList: Array<any> = [];

  ngOnInit(): void {

  }

  public onClickAdd() {
    if (this.name != "" && this.email != "" && this.filme != "") {
      this.contatoList.push({ nome: this.name, email: this.email, filme: this.filme })
    }

    this.router.navigate(['/']);
  }
}