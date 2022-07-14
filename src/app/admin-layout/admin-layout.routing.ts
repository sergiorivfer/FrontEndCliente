import { Routes } from "@angular/router";

import { ClienteComponent } from '../cliente/cliente.component';
import { CreateclienteComponent } from '../cliente/createcliente/createcliente.component';
import { DetailclienteComponent } from '../cliente/detailcliente/detailcliente.component';
import { EditarclienteComponent } from '../cliente/editarcliente/editarcliente.component';

export const AdminLayoutComponent: Routes = [
    
    { path: '', component: ClienteComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'create-cliente', component: CreateclienteComponent },
    { path: 'cliente/:idcliente', component: DetailclienteComponent },
    { path: 'editcliente/:idcliente', component: EditarclienteComponent }

];