import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

export function Main() {
  let app    = document.querySelector('app-root');
  let loader = document.querySelector('.application-loader');

  window.setTimeout(()=> {
    app.classList.add('active');
    loader.classList.remove('active');
  }, 100);

  platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  Main();
} else {
  document.addEventListener('DOMContentLoaded', Main);
}
