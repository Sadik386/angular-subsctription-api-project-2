// import { Routes } from '@angular/router';
// import { SubscriptionComponent } from './pages/subscription/subscription.component';
// import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/data-table', pathMatch: 'full' },
//   {
//     path: 'subscription',
//     loadComponent: () => import('./pages/subscription/subscription.component').then(m => m.SubscriptionComponent)
//   },
//   {
//     path: 'data-table',
//     loadComponent: () => import('./pages/data-table-page/data-table-page.component').then(m => m.DataTablePageComponent)
//   }
// ];
import { Routes } from '@angular/router';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/data-table', pathMatch: 'full' },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'data-table', component: DataTablePageComponent } 
];
