import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'book',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'allbooks',
        component: BooksComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'details/:id',
        component: BookDetailsComponent,
        data: {
          isLogged: true,
        }
      },
      {
        path: 'create',
        component: CreateBookComponent,
        data: {
          isLogged: true
        }
      }
    ]
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);
