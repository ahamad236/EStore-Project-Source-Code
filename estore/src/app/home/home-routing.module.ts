import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { PastordersComponent } from './components/pastorders/pastorders.component';
import { authGuard } from './services/authguard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductdetailsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'signup',
        component: UserSignupComponent,
      },
      {
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path: 'pastorders',
        component: PastordersComponent,
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
