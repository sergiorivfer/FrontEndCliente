import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './admin-layout.routing';

import { ClienteComponent } from '../cliente/cliente.component';
import { CreateclienteComponent } from '../cliente/createcliente/createcliente.component';
import { DetailclienteComponent } from '../cliente/detailcliente/detailcliente.component';
import { EditarclienteComponent } from '../cliente/editarcliente/editarcliente.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutComponent),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        HttpClientModule,
        MatMenuModule,
        MatIconModule
    ],

    declarations: [
        ClienteComponent,
        CreateclienteComponent,
        DetailclienteComponent,
        EditarclienteComponent
    ],
    exports: [

    ]
})

export class AdminLayoutModule {}