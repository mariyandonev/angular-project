import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { HidePassDirective } from './hide-pass.directive';



@NgModule({
  declarations: [
    EmailValidatorDirective,
    HidePassDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailValidatorDirective
  ]
})
export class SharedModule { }
