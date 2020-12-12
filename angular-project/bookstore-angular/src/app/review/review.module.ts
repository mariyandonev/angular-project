import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import {ReviewService} from './review.service';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NewComponent } from './new/new.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReviewsRoutingModule} from './reviews-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ReviewsComponent,
    NewComponent
  ],
  providers: [
    ReviewService
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    ReviewsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  exports: [
    ReviewsComponent,
  ]
})
export class ReviewModule { }
