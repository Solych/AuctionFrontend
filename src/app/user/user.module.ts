import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from './authorization/authorization.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {RegistrationComponent} from './registration/registration.component';

@NgModule({
  declarations: [
    AuthorizationComponent,
    UserDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
