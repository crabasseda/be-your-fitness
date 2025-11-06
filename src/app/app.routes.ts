import { Routes } from '@angular/router';
import { UrlKey } from '@models/url';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: UrlKey.Login,
    pathMatch: 'full',
  },
  {
    path: UrlKey.Login,
    loadComponent: () => import('@auth/login/login').then((m) => m.Login),
  },
  {
    path: UrlKey.Home,
    canActivate: [AuthGuard],
    loadComponent: () => import('@features/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: UrlKey.Login,
  },
];
