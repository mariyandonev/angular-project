import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CreateBookComponent} from './create-book/create-book.component';

const routes: Routes = [
  {
    path: 'book',
    children: [
      {
        path: 'allbooks',
        component: BooksComponent
      },
      {
        path: 'details/:id',
        component: BookDetailsComponent
      },
      {
        path: 'create',
        component: CreateBookComponent
      }
    ]
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);
