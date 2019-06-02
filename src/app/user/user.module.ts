import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from './authorization/authorization.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {RegistrationComponent} from './registration/registration.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {InputTextModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AuthorizationComponent,
    UserDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    SharedModule,
    InputTextModule
  ]
})
export class UserModule { }
