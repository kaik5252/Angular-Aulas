import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pag/home/home.component';
import { FooterComponent } from './pag/footer/footer.component';
import { HeaderComponent } from './pag/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pag/search/search.component';
import { ShinyComponent } from './pag/shiny/shiny.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ShinyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
