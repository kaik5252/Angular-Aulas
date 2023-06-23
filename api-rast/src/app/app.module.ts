import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Service
import { ServicosService } from './service/servicos.service';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    LoginComponent,
    PainelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
