import { Injectable } from '@angular/core';
import {IUser} from '../shared/interfaces';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @ts-ignore
  currentUser: IUser | null;

  constructor(private http: HttpClient) { }

  getCurrentUserProfile(): Observable<any>{
    return this.http.get(`${apiUrl}/users/profile`, { withCredentials: true })
    // @ts-ignore
      .pipe(tap((user) => this.currentUser = user),
        catchError(async () => this.currentUser = null)
      );
  }

  get isLogged(): boolean{
    return !!this.currentUser;
  }

  register(userData: IUser): Observable<any>{
    return this.http.post(`${apiUrl}/users/register`, userData);
  }

  login(userData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${apiUrl}/users/login`, userData, { withCredentials: true })
    // @ts-ignore
      .pipe(tap((user: IUser) => this.currentUser = user ));
  }

  logout(): Observable<any>{
    return this.http.post(`${apiUrl}/users/logout`, {}, { withCredentials: true })
      .pipe(tap(() => this.currentUser = null));
  }
}
