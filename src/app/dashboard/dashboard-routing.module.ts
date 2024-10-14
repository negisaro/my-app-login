import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'propietario',
        loadChildren: () => import('../propietario/propietario.module').then(m => m.PropietarioModule)
      },
      {
        path: 'vehiculo',
        loadChildren: () => import('../vehiculo/vehiculo.module').then(m => m.VehiculoModule)
      },
      {
        path: 'ingreso',
        loadChildren: () => import('../ingreso/ingreso.module').then(m => m.IngresoModule)
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
