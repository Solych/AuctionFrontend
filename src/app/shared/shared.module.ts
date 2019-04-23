import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddThingComponent} from './add-thing/add-thing.component';
import {HeaderComponent} from './header/header.component';
import {HelpComponent} from './help/help.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AddThingComponent,
    HeaderComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    AddThingComponent,
    HeaderComponent,
    HelpComponent
  ]
})
export class SharedModule { }
