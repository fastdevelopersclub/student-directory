import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path:'login',
    loadComponent: () =>
      import('./Pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path:'profile/:username',
    loadComponent: () =>
      import('./Pages/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  {
    path:'results',
    loadComponent: () =>
      import('./Pages/search-results/search-results.component').then(
        (m) => m.SearchResultsComponent
      ),
  }
];
