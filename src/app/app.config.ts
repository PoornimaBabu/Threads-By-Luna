import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideStore } from '@ngxs/store';
import { CartState } from './state/cart.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), //Tells angular to use fetch instead of httpclient's xml request
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore([CartState]),
  ]
};
