import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietarioRoutingModule } from './propietario-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddPropietarioComponent } from './pages/add-propietario/add-propietario.component';
import { LayoutPropietarioComponent } from './layouts/layout-propietario/layout-propietario.component';
import { ListPropietarioComponent } from './pages/list-propietario/list-propietario.component';

@NgModule({
  declarations: [
    AddPropietarioComponent,
    LayoutPropietarioComponent,
    ListPropietarioComponent,
  ],
  imports: [
    CommonModule,
    PropietarioRoutingModule,
    SharedModule,
  ]
})
export class PropietarioModule { }
