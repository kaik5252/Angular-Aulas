import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const toLogin = () => redirectUnauthorizedTo(['/user/login']);
const toHome = () => redirectLoggedInTo(['/admin/home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Página inicial', component: HomeComponent },
  {
    path: 'login',
    title: 'Faça login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: toHome }
  },
  {
    path: 'profile',
    title: 'Perfil de usuário',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: toLogin }
  },
  { path: '**', redirectTo: 'e404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
