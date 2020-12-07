import { Injectable } from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../../user/user.service';
import {IUser} from '../../shared/interfaces';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService, private router: Router) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    let stream$: Observable<IUser | null>;

    if(this.userService.currentUser === undefined){
      stream$ = this.userService.getCurrentUserProfile();
    } else {
      stream$ = of(this.userService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isDataLogged = childRoute.data.isLogged;
        return typeof isDataLogged !== 'boolean' || isDataLogged === !!user;
      }),
      tap((canContinue) => {
        if(canContinue){
          return;
        }
        this.router.navigate(['/home']);
      }),
    );
  }

}
