import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutVehiculoComponent } from './layouts/layout-vehiculo/layout-vehiculo.component';
import { ListVehiculoComponent } from './pages/list-vehiculo/list-vehiculo.component';
import { AddVehiculoComponent } from './pages/add-vehiculo/add-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutVehiculoComponent,
  },
  {
    path: 'list-vehiculos',
    component: ListVehiculoComponent,
  },
  {
    path: 'add-vehiculos',
    component: AddVehiculoComponent,
  },
  {
    path: 'editar-vehiculos/:id',
    component: AddVehiculoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoRoutingModule {}
