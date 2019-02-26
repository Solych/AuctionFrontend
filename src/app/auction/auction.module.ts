import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import {ThingDetailComponent} from './thing-detail/thing-detail.component';

@NgModule({
  declarations: [
    ActionComponent,
    ThingDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuctionModule { }
