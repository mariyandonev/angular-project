import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookDetailsComponent} from './book-details/book-details.component';

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
    ]
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);
