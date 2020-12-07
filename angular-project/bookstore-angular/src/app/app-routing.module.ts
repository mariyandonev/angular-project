import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ReviewsComponent} from './review/reviews/reviews.component';
import {AuthGuard} from './core/guards/auth.guard';

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
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
