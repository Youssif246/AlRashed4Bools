import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'شركة الراشد للمسابح والعوازل والمقاولات العامة | الأحساء'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'من نحن — شركة الراشد للمسابح والعوازل والمقاولات العامة'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'خدماتنا — شركة الراشد للمسابح والعوازل والمقاولات العامة'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'تواصل معنا — شركة الراشد للمسابح والعوازل والمقاولات العامة'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
