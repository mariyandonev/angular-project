import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IBook, IUser} from '../../shared/interfaces';
import {BookService} from '../../book/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // @ts-ignore
  books: IBook[];

  constructor(private userService: UserService, private bookService: BookService) { }

  get currentUser(): IUser | null{
    return this.userService.currentUser;
  }
  ngOnInit(): void {
    this.bookService.loadBooks().subscribe(books => {
      this.books = books;
    });
  }

}
