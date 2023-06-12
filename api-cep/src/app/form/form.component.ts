import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
  ddd: any;

  constructor(private service: ConsultaService) { }

  ngOnInit(): void { }

  buscarCep() {
    this.service.getCep(this.cep).subscribe((e) => {
      console.log(e);
      this.cep = e.cep;
      this.logradouro = e.logradouro;
      this.localidade = e.localidade;
      this.bairro = e.bairro;
      this.uf = e.uf;
      this.ddd = e.ddd;
    })
  }
}
