import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import {ReviewService} from './review.service';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  providers: [
    ReviewService
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewModule { }
