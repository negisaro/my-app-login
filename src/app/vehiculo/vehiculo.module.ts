import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LayoutVehiculoComponent } from './layouts/layout-vehiculo/layout-vehiculo.component';
import { ListVehiculoComponent } from './pages/list-vehiculo/list-vehiculo.component';
import { AddVehiculoComponent } from './pages/add-vehiculo/add-vehiculo.component';

@NgModule({
  declarations: [
    LayoutVehiculoComponent,
    ListVehiculoComponent,
    AddVehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class VehiculoModule { }
