import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../shared/interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  // @ts-ignore
  @Input() book: IBook;
  constructor() { }

  ngOnInit(): void {
  }

}
