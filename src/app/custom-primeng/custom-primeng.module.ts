import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatLabelModule} from 'primeng/floatlabel'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { providePrimeNG} from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import {InputText} from 'primeng/inputtext'

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
    InputText
  ],
  exports:[
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    MessageModule,
    InputText
  ]
})
export class CustomPrimengModule { }
