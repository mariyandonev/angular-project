import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook, IReview} from '../shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  loadBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(`${apiUrl}/books`)
  }

  loadBook(id: string): Observable<IBook>{
    return this.http.get<IBook>(`${apiUrl}/books/${id}`);
  }

  saveBook(data: IBook): Observable<IBook<any>>{
    return this.http.post<IBook<IReview>>(`${apiUrl}/books`, data, { withCredentials:true });
  }
}
