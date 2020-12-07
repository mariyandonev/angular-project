import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../../shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  get currentUser(): IUser | null{
    return this.userService.currentUser;
  }
  ngOnInit(): void {
  }

}
