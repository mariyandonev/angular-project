import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CoreModule} from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent} from './core/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserModule} from './user/user.module';
import {BookModule} from './book/book.module';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import {ReviewModule} from './review/review.module';
import {MatButtonModule} from '@angular/material/button';
import {ReviewService} from './review/review.service';
import {OrderModule} from 'ngx-order-pipe';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    BookModule,
    HttpClientModule,
    ReviewModule,
    MatButtonModule,
    OrderModule,
  ],
  providers: [
    ReviewService
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }
