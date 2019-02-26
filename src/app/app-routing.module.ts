import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './user/registration/registration.component';
import {AuthorizationComponent} from './user/authorization/authorization.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {ActionComponent} from './auction/action/action.component';
import {ThingDetailComponent} from './auction/thing-detail/thing-detail.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: AuthorizationComponent
  },
  {
    path: 'auction',
    component: ActionComponent
  },
  {
    path: 'home',
    component: UserDetailsComponent
  },
  {
    path: 'thing',
    component: ThingDetailComponent
  },
  {
    path: '**',
    redirectTo: 'auction'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
