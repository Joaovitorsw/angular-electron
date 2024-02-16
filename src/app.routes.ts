import { Routes } from '@angular/router';
import { DETAIL_ROUTES } from './app/domain/detail/detail.routing';
import { HOME_ROUTES } from './app/domain/home/home.routing';
import { NotFoundComponent } from './app/shared/components/pages/not-found/not-found.component';

export const routes: Routes = [
  ...HOME_ROUTES,
  ...DETAIL_ROUTES,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
