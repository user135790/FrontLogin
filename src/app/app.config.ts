import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG} from 'primeng/config';
import Lara from '@primeng/themes/lara'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations'
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              providePrimeNG({
                theme: {
                  preset: Lara,
                  options:{
                    cssLayer:{
                      name: 'primeng',
                      order: 'app-styles, primeng, another-css-library'
                    }
                  }
                }
              }),
              provideAnimations(),
              provideRouter(routes), 
              provideHttpClient(withInterceptors([authInterceptor]))]
};
