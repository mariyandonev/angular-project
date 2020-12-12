import {Component, OnDestroy} from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';
import {IUser} from '../../shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): IUser | null{
    return this.userService.currentUser;
  }

  constructor(private userService:UserService, private router: Router) { }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/home']))
  }

  ngOnDestroy(): void {
  }

}
