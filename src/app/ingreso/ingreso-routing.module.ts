import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutIngresoComponent } from './layouts/layout-ingreso/layout-ingreso.component';
import { AddIngresoComponent } from './pages/add-ingreso/add-ingreso.component';
import { ListIngresoComponent } from './pages/list-ingreso/list-ingreso.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutIngresoComponent,
  },
  {
    path: 'list-ingresos',
    component: ListIngresoComponent,
  },
  {
    path: 'add-ingresos',
    component: AddIngresoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class IngresoRoutingModule { }
