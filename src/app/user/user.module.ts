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
import {ChartModule} from 'primeng/chart';

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
    InputTextModule,
    ChartModule
  ]
})
export class UserModule { }
