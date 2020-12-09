import {Component, Input, OnInit} from '@angular/core';
import {IReview} from '../../shared/interfaces';
import {ReviewService} from '../review.service';
import {UserService} from '../../user/user.service';
import {DatePipe} from '@angular/common';

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

  pipe = new DatePipe('en-US');

  constructor(private reviewService: ReviewService, private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.reviewService.loadAllReviews(this.bookId, 5)
      .subscribe(reviews => {
        this.reviews = reviews;
      });
  }

}
