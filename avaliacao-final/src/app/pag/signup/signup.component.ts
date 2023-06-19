import { Component } from '@angular/core';
import { BgService } from 'src/app/service/bg.service';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
  
  constructor(private bgService: BgService, private cepService: CepService) { }

  buscarCep() {
    this.cepService.getCep(this.cep).subscribe((e) => {
      this.logradouro = e.logradouro;
      this.localidade = e.localidade;
      this.bairro = e.bairro;
      this.uf = e.uf;
    });
  }
}
