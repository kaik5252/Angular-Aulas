import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DiretivasListComponent } from './diretivas-list/diretivas-list.component';
import { FormsModule } from '@angular/forms';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    DiretivasListComponent
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
