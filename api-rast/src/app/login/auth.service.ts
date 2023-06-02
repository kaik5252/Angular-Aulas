import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  acesso(usuario: Usuario) {
    if(usuario.login === "adm@senac.br" && usuario.senha === "123456") {
      this.usuarioAutenticado = true;
      alert("Seja bem-vindo ADM :D\nRedirecionando...");
      this.router.navigate(['adm-painel']);
    } else {
      this.usuarioAutenticado = false;
      alert("Login e/ou senha inválido(s), Verifique os campos e digite novamente.");
    }
  }
}
