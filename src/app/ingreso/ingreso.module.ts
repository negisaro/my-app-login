import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AddIngresoComponent } from './pages/add-ingreso/add-ingreso.component';
import { ListIngresoComponent } from './pages/list-ingreso/list-ingreso.component';
import { LayoutIngresoComponent } from './layouts/layout-ingreso/layout-ingreso.component';


@NgModule({
  declarations: [
    AddIngresoComponent,
    ListIngresoComponent,
    LayoutIngresoComponent,
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})

export class IngresoModule { }
