import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { HttpIntersepterService } from './service/http/http-intersepter.service';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptorsFromDi()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),{ provide: HTTP_INTERCEPTORS, useClass: HttpIntersepterService, multi: true}]
};
