import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {IBook, IReview, IUser} from '../../shared/interfaces';
import {DatePipe} from '@angular/common';
import {UserService} from '../../user/user.service';
import {environment} from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  // @ts-ignore
  book: IBook<IReview> = null;
  pipe = new DatePipe('en-GB');
  edit = false;
  isSubscribed = false;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private userService: UserService) {

    const id = activatedRoute.snapshot.params.id;
    bookService.loadBook(id).subscribe(book => {
      this.book = book;
    })
  }

  get currentUser(): IUser | null{
    return this.userService.currentUser;
  }

  ngOnInit(): void {
  }

  editBookDetails(data: IBook, id: string): void {
    this.bookService.updateBook(data, id).subscribe({
      next: () => {
        this.edit = false;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  subscribeToBook(bookId: string, userId: string): void {
    this.bookService.subToBook(bookId, userId).subscribe({
      next: () => {
        this.isSubscribed = true;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  checkSubscription(): boolean {
    for(let subscriberId of this.book?.subscribers){
      if(subscriberId === this.currentUser?._id){
        return true;
      }
    }
    return false;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }
}
