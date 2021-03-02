import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path:'',
      component: HomeComponent
    },
    {
      path: 'products/:id',
      component: ProductDetailsComponent
    }
  ],
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
