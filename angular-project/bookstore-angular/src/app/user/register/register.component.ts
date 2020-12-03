import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email], []],
      username: ['', [Validators.required], []],
      password: ['', [Validators.required, Validators.minLength(3)], []],
    })
  }

  // checkPasswords(form: FormGroup) {
  //   let pass = form.get('password')?.value;
  //   let confirmPass = form.get('passwordConfirm')?.value;
  //
  //   return pass === confirmPass ? null : {notSame: true}
  // }

  registerHandler(): void {
    console.log(this.form.value)
  }

  resetRegistrationForm(): void {
    this.form.reset();
  }
}
