import {Component, Input, OnInit} from '@angular/core';
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
  // @ts-ignore
  @Input() book: IBook;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bookName: ['', [Validators.required]],
      bookAuthor: ['', [Validators.required]],
      bookPrice: ['', [Validators.required, Validators.pattern('^\\d+(.\\d{1,2})?$')]],
      reviewText: ['', [Validators.required, Validators.maxLength(200)]]
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
