import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { AddUserComponent } from './pages/add-user/add-user.component';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

@NgModule({
  declarations: [
    AddUserComponent,
    LayoutUserComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
