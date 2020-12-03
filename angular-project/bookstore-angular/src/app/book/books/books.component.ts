import {Component, OnInit} from '@angular/core';
import {IBook} from '../../shared/interfaces';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  // @ts-ignore
  books: IBook[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe(books => {
      this.books = books;
    });
  }

}
