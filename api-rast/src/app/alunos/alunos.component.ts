import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel();

  alunos: Array<any> = new Array();

  constructor(private alunoService: ServicosService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.alunoService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;
    }, err => {
      console.log("Erro ao listar alunos", err);
    });
  }

  cadastrar() {
    this.alunoService.cadastrarAlunos(this.aluno).subscribe( alunos => {
      this.aluno = new AlunoModel();
      this.listar();
    }, err => {
      console.log("Erro ao cadastrar aluno", err);
    });
  }

  atualizar(id: number) {
    this.alunoService.atualizarAlunos(id, this.aluno).subscribe( alunos => {
      this.aluno = new AlunoModel();
      this.listar();
    }, err => {
      console.log("Erro ao atualizar aluno", err);
    });
  }

  deletar(id: number) {
    this.alunoService.deletarAlunos(id).subscribe( alunos => {
      this.listar();
    }, err => {
      console.log("Erro ao deletar aluno", err);
    });
  }
}
