import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import {ThingDetailComponent} from './thing-detail/thing-detail.component';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../shared/shared.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ActionComponent,
    ThingDetailComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    TableModule
  ]
})
export class AuctionModule { }
