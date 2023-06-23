import { Component } from '@angular/core';
import { BgService } from 'src/app/service/bg.service';
import { CepService } from 'src/app/service/cep.service';
import { UserModel } from 'src/app/service/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: UserModel = new UserModel();
  msg: string = "";

  constructor(private bgService: BgService, private cepService: CepService) { }

  buscarCep() {
    if (this.user.cep.length == 8) {
      this.cepService.getCep(this.user.cep).subscribe((e) => {
        this.user.logradouro = e.logradouro;
        this.user.localidade = e.localidade;
        this.user.bairro = e.bairro;
        this.user.uf = e.uf;
      });
    }
  }

  cadastrar() {
    this.bgService.createUser(this.user).subscribe((e) => {
      this.msg = e.message;
    });
  }
}
