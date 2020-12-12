import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {IBook, IUser} from '../../shared/interfaces';
import {BookService} from '../../book/book.service';
import {CanComponentDeactivate} from '../../core/guards/unsaved-changes.guard';
import {Observable} from 'rxjs/internal/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, CanComponentDeactivate {

  // @ts-ignore
  books: IBook[];
  // @ts-ignore
  data: IUser;
  edit = false;
  changed = false;

  constructor(private userService: UserService,
              private bookService: BookService) {
  }

  get currentUser(): IUser | null {
    return this.userService.currentUser;
  }

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe(books => {
      this.books = books;
    });
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  updateProfileHandler(): void {
    this.userService.updateProfile(this.data).subscribe({
      next: () => {
        this.edit = false;
        this.changed = true;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  canDeactivate(): Observable<boolean> | boolean {
    if ((this.data?.username !== this.currentUser?.username || this.data?.email !== this.currentUser?.email) && this.changed) {
      return confirm("Do you want to discard the changes?");
    } else {
      return true;
    }
  }

}
