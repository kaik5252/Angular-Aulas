import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adm-login', component: LoginComponent },
  { path: 'adm-painel', component: PainelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
