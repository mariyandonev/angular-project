import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  resetLoginForm(): void {
    this.form.reset();
  }

  //TODO:
  loginHandler(data: any): void {
    console.log(data);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
}
