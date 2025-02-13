import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatLabelModule} from 'primeng/floatlabel'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { providePrimeNG} from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import {InputText} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    MessageModule,
    InputText,
    TableModule,
    DataViewModule,
    MenubarModule,
    ToastModule
  ],
  exports:[
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    MessageModule,
    InputText,
    TableModule,
    DataViewModule,
    MenubarModule,
    ToastModule
  ]
})
export class CustomPrimengModule { }
