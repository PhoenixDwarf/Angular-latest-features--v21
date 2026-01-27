import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import('./dashboard/pages/change-detection/change-detection'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views'),
      },
      {
        path: 'country/:id',
        title: 'Country',
        loadComponent: () => import('./dashboard/pages/country/user'),
      },
      {
        path: 'country-list',
        title: 'Country List',
        loadComponent: () => import('./dashboard/pages/user-list/country-list'),
      },
      {
        path: 'view-transition1',
        title: 'View Transition 1',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition1'),
      },
      {
        path: 'view-transition2',
        title: 'View Transition 2',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition2'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
