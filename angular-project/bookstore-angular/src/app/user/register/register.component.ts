import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {rePasswordValidatorFactory} from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: passwordControl,
      passwordConfirm: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]],
    })
  }

  ngOnInit(): void {

  }

  //TODO:
  registerHandler(): void {
    console.log(this.form.value)
  }

  resetRegistrationForm(): void {
    this.form.reset();
  }
}
