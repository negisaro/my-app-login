import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutProductComponent } from './layouts/layout-product/layout-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProductComponent,
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
