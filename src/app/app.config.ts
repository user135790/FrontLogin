import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG} from 'primeng/config';
import Lara from '@primeng/themes/lara'

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              providePrimeNG({
                theme: {
                  preset: Lara
                },
                ripple:true
              }),
              provideRouter(routes), 
              provideHttpClient()]
};
