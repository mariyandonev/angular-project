import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReviewsComponent} from './review/reviews/reviews.component';
import {AuthGuard} from './core/guards/auth.guard';
import {TopComponent} from './top/top.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      },
      {
        path: 'top',
        component: TopComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
