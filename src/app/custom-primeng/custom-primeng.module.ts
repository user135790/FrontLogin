import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatLabelModule} from 'primeng/floatlabel'
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { providePrimeNG} from 'primeng/config';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ],
  exports:[
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ]
})
export class CustomPrimengModule { }
