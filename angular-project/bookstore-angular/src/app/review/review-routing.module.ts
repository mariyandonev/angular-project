import {RouterModule, Routes} from '@angular/router';
import {ReviewsComponent} from './reviews/reviews.component';

const routes: Routes = [
  {
    path: 'reviews',
    component: ReviewsComponent
  },
];

export const ReviewRoutingModule = RouterModule.forChild(routes);
