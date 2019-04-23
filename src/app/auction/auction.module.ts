import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThingDetailComponent} from './thing-detail/thing-detail.component';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../shared/shared.module';
import {AreaComponent} from './area/area.component';

@NgModule({
  declarations: [
    ThingDetailComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule
  ]
})
export class AuctionModule { }
