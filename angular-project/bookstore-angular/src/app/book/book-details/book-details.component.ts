import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private bookService:BookService) {
    const id = activatedRoute.snapshot.params.id;
    bookService.loadBook(id);
  }

  ngOnInit(): void {
  }

}
