import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
