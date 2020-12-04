import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import {ReviewService} from './review.service';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  providers: [
    ReviewService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewModule { }
