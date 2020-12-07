import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService:UserService, private router: Router) { }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/user/login']))
  }

  ngOnDestroy(): void {
  }

}
