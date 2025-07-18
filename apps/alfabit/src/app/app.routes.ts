import { Routes } from '@angular/router';
import { HomepageComponent } from '@lara/homepage';
import { LoginPageComponent } from '@lara/login-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('@lara/login-page').then((m) => m.LoginPageComponent),
  },
  {
    path: 'homepage',
    loadComponent: () =>
      import('@lara/homepage').then((m) => m.HomepageComponent),
  },
];

