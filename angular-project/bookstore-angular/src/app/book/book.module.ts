import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {BooksComponent} from './books/books.component';
import {BookItemComponent} from './book-item/book-item.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookService} from './book.service';



@NgModule({
  declarations: [
    BookItemComponent,
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [
    BookService
  ],
  exports: [
    BooksComponent,
    BookItemComponent
  ]
})
export class BookModule { }
