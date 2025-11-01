import { Routes } from '@angular/router';
import { UrlKey } from '@models/url';

export const routes: Routes = [
  {
    path: '',
    redirectTo: UrlKey.Home,
    pathMatch: 'full',
  },
  {
    path: UrlKey.Home,
    loadComponent: () => import('@features/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: UrlKey.Home,
  },
];
