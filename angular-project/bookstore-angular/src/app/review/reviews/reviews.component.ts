import {Component, Input, OnInit} from '@angular/core';
import {IReview} from '../../shared/interfaces';
import {ReviewService} from '../review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  // @ts-ignore
  @Input() bookId: string;

  // @ts-ignore
  reviews: IReview[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.loadAllReviews(this.bookId, 5)
      .subscribe(reviews => {
        this.reviews = reviews;
      });
  }

}
