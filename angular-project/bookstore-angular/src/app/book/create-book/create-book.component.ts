import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {IBook} from '../../shared/interfaces';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      isbn: ['', [Validators.required]]
    })
  }


  createBookHandler(data: IBook): void {
    this.bookService.saveBook(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/book/allbooks'])
        },
        error: err => {
          console.error(err);
        }
      })
  }

}
