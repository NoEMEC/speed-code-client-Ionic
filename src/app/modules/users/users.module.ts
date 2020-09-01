import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { CreateUserComponent } from './pages/create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsersPageRoutingModule,
  ],
  declarations: [UsersPage, CreateUserComponent],
  entryComponents: [CreateUserComponent],
})
export class UsersPageModule {}
