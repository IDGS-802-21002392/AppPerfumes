import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    CatalogoComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    CatalogoComponent,
    ContactoComponent
  ]
})
export class PerfumeModule { }
