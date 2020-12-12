import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook, IReview, IUser} from '../shared/interfaces';
import {tap} from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // @ts-ignore
  currentBook: IBook | null;

  constructor(private http: HttpClient) { }

  loadBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(`${apiUrl}/books`, { withCredentials: true })
  }

  loadBook(id: string): Observable<IBook<IReview>>{
    return this.http.get<IBook<IReview>>(`${apiUrl}/books/${id}`, { withCredentials: true });
  }

  saveBook(data: IBook): Observable<IBook<any>>{
    return this.http.post<IBook<any>>(`${apiUrl}/books`, data, { withCredentials: true });
  }

  updateBook(data: IBook, id: string): Observable<IBook>{
    return this.http.put(`${apiUrl}/books/${id}`, data, { withCredentials: true })
    // @ts-ignore
      .pipe(tap((book: IBook) => this.currentBook = book));
  }

  subToBook(bookId: string, userId: string): Observable<IBook>{
    return this.http.put(`${apiUrl}/books/${bookId}`, {userId}, {withCredentials: true})
    // @ts-ignore
      .pipe(tap((book: IBook) => this.currentBook = book));
  }

  unsubToBook(bookId: string, userId: string): Observable<IBook>{
    // @ts-ignore
    return this.http.put(`${apiUrl}/books/${bookId}`, {userId}, {withCredentials: true})
      // @ts-ignore
      .pipe(tap((book: IBook) => this.currentBook = book));
  }
}
