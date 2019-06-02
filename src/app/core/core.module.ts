import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';
import {ThingService} from '../shared/thing.service';
import {UserService} from '../shared/user.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {HelperService} from '../shared/helper.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryService} from '../shared/category.service';
import {RouteGuard} from '../route.guard';
import {SharedService} from '../shared/shared.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [
    ThingService,
    UserService,
    MessageService,
    HelperService,
    CategoryService,
    SharedService,
    RouteGuard
  ]
})
export class CoreModule { }
