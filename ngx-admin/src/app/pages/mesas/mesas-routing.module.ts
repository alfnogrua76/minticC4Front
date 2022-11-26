import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    component: EliminarComponent
  },
  {
    path: 'editar/:id_mesa',
    component: EliminarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
