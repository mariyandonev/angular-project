import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IReview} from '../shared/interfaces';
import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  // @ts-ignore
  @Input() reviewId: string;

  constructor(private http: HttpClient) {
  }

  loadAllReviews(limit?: number): Observable<IReview[]> {
    return this.http.get<IReview[]>(
      `${apiUrl}/reviews${limit ? `?=${limit}` : ''}`
    );
  }

  saveReview(data: any): Observable<IReview> {
    return this.http.post<IReview>(`${apiUrl}/books`, data, { withCredentials: true })
  }

}
