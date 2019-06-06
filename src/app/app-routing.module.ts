import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './user/registration/registration.component';
import {AuthorizationComponent} from './user/authorization/authorization.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {ThingDetailComponent} from './auction/thing-detail/thing-detail.component';
import {AreaComponent} from './auction/area/area.component';
import {AddThingComponent} from './shared/add-thing/add-thing.component';
import {RouteGuard} from './route.guard';

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
    canActivate: [RouteGuard],
    component: UserDetailsComponent
  },
  {
    path: 'thing/:id',
    component: ThingDetailComponent
  },
  {
    path: 'auction',
    component: AreaComponent
  },
  {
    path: 'new',
    canActivate: [RouteGuard],
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
