import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {rePasswordValidatorFactory} from '../../shared/validators';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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

  registerHandler(): void {
    const data = this.form.value;

    this.userService.register(data).subscribe({
      next: () => {
        this.router.navigate(['user/login']);
        console.log(data);
      },
      error: err => {
        console.error(err);
      }
    })
  }

  resetRegistrationForm(): void {
    this.form.reset();
  }
}
