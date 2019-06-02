import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddThingComponent} from './add-thing/add-thing.component';
import {HeaderComponent} from './header/header.component';
import {HelpComponent} from './help/help.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule, InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AddThingComponent,
    HeaderComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    FileUploadModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    InputTextModule,
    DialogModule
  ],
  exports: [
    AddThingComponent,
    HeaderComponent,
    HelpComponent,
    DialogModule
  ]
})
export class SharedModule { }
