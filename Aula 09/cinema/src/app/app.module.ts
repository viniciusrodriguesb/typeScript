import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ROUTES } from './app.routes';
import { CategoriaComponent } from './categoria/categoria.component';
import { Categoria1Component } from './categoria/categoria1/categoria1.component';
import { CategoriasService } from './categoria/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PrincipalComponent,
    SobreComponent,
    CategoriaComponent,
    Categoria1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }