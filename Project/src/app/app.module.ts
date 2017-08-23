import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { PeliculasDestacadasComponent } from './peliculas-destacadas/peliculas-destacadas.component';
import { ItemPeliculaComponent } from './peliculas-destacadas/item-pelicula/item-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PeliculasDestacadasComponent,
    ItemPeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
