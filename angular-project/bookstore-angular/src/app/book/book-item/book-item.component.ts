import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../shared/interfaces';
import {DatePipe} from '@angular/common';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  // @ts-ignore
  @Input() book: IBook;
  pipe = new DatePipe('en-US');

  constructor() { }

  ngOnInit(): void {
  }
}
