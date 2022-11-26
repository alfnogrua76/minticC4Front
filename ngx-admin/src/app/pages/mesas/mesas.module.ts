import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class MesasModule { }
