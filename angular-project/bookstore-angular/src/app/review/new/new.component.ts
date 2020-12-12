import { Component, OnInit } from '@angular/core';
import {IBook, IReview} from '../../shared/interfaces';
import {BookService} from '../../book/book.service';
import {ReviewService} from '../review.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  // @ts-ignore
  books: IBook[];

  constructor(private bookService: BookService,
              private reviewService: ReviewService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe(books => {
      this.books = books;
    });
  }

  newReviewHandler(data: IReview): void {
    this.reviewService.saveReview(data)
      .subscribe( {
        next: () => {
          this.router.navigate(['/reviews'])
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

}
