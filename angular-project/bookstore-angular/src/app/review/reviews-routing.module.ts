import {Routes, RouterModule} from '@angular/router';
import {NewComponent} from './new/new.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'reviews',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'all',
        component: ReviewsComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          isLogged: true
        }
      }
    ]
  }

];

export const ReviewsRoutingModule = RouterModule.forChild(routes);
