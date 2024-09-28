import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';

import { LayoutPropietarioComponent } from './layouts/layout-propietario/layout-propietario.component';
import { ListPropietarioComponent } from './pages/list-propietario/list-propietario.component';
import { AddPropietarioComponent } from './pages/add-propietario/add-propietario.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPropietarioComponent,
  },
  {
    path: 'list-propietarios',
    component: ListPropietarioComponent,
  },
  {
    path: 'add-propietarios',
    component: AddPropietarioComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class PropietarioRoutingModule { }
