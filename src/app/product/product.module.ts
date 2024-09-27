import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { LayoutProductComponent } from './layouts/layout-product/layout-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent,
    LayoutProductComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})

export class ProductModule { }
