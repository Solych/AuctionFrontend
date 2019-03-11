import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddThingComponent} from './add-thing/add-thing.component';

@NgModule({
  declarations: [AddThingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddThingComponent
  ]
})
export class SharedModule { }
