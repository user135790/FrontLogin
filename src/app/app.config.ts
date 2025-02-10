import { ApplicationConfig, importProvidersFrom, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { providePrimeNG} from 'primeng/config';
import Lara from '@primeng/themes/lara'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations'
import { authInterceptor } from './auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt'
import { AuthService } from './auth.service';

 export function tokenGetter(){
    return sessionStorage.getItem("token");
 }
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
              importProvidersFrom(JwtModule.forRoot({
                config:{
                  tokenGetter: tokenGetter,
                  allowedDomains: ["/usuarios"],
                  disallowedRoutes: ["/usuarios/auth"]
                }
              })),
              provideRouter(routes, withComponentInputBinding(),withRouterConfig({paramsInheritanceStrategy:'always'})), 
              provideHttpClient(withInterceptors([authInterceptor]),withInterceptorsFromDi())]
};
