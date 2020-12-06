import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // @ts-ignore
  form: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  loginHandler(values: { email: string, password: string }): void {
    this.errorMessage = '';

    this.userService.login(values).subscribe({
      next: () => {
        this.router.navigate(['/book/allbooks']);
        console.log(values)
      },
      error: err => {
        this.errorMessage = 'There is some kind of an error!';
        console.error(err);
      }
    })
  }

  resetLoginForm(): void {
    this.form.reset();
  }

}
