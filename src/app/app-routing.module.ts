import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './user/registration/registration.component';
import {AuthorizationComponent} from './user/authorization/authorization.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {ThingDetailComponent} from './auction/thing-detail/thing-detail.component';
import {HelpComponent} from './shared/help/help.component';
import {AreaComponent} from './auction/area/area.component';
import {AddThingComponent} from './shared/add-thing/add-thing.component';

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
    path: 'home',
    component: UserDetailsComponent
  },
  {
    path: 'thing',
    component: ThingDetailComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'auction',
    component: AreaComponent
  },
  {
    path: 'new',
    component: AddThingComponent
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
