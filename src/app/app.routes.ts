import { Routes } from '@angular/router';
import { InicioComponent } from './perfume/inicio/inicio.component';
import { CatalogoComponent } from './perfume/catalogo/catalogo.component';
import { ContactoComponent } from './perfume/contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'contacto', component: ContactoComponent}
];