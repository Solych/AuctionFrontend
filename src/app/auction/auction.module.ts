import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThingDetailComponent} from './thing-detail/thing-detail.component';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../shared/shared.module';
import {AreaComponent} from './area/area.component';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ThingDetailComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    ListboxModule,
    FormsModule
  ]
})
export class AuctionModule { }
