import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { RodapeComponent } from './fixar/rodape/rodape.component';
import { MenuComponent } from './fixar/menu/menu.component';
import { FormsModule } from '@angular/forms';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ContatoComponent,
    SobreComponent,
    RodapeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
