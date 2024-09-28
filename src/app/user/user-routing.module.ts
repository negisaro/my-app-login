import { NgModule } from '@angular/core';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
