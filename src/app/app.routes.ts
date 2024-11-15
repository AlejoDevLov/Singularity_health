import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then( m => m.HomeComponent ),
    children: [
      {
        path: 'location',
        loadComponent: () => import('./pages/home/pages/location/location.component').then( m => m.LocationComponent ),
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/home/pages/services-page/services.component').then( m => m.ServicesComponent ),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/home/pages/about/about.component').then( m => m.AboutComponent ),
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/home/pages/blog/blog.component').then( m => m.BlogComponent ),
      },
      {
        path: 'franchise',
        loadComponent: () => import('./pages/home/pages/franchise/franchise.component').then( m => m.FranchiseComponent ),
      },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/pageNotFound/pageNotFound.component').then( m => m.PageNotFoundComponent )
  }
];
