import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/data-table', pathMatch: 'full' },
  {
    path: 'plans',
    loadComponent: () => import('./pages/subscription/subscription.component').then(m => m.SubscriptionComponent)
  },
  {
    path: 'data-table',
    loadComponent: () => import('./pages/data-table-page/data-table-page.component').then(m => m.DataTablePageComponent)
  }
];
