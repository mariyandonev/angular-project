import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {BooksComponent} from './books/books.component';
import {BookItemComponent} from './book-item/book-item.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookService} from './book.service';
import { CreateBookComponent } from './create-book/create-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent,
    BookDetailsComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
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
