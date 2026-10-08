import { Routes } from '@angular/router';
import { MainComponent } from './compunent/main/main.component';
import { HomeComponent } from './compunent/home/home.component';
import { ProdicuteComponent } from './compunent/prodicute/prodicute.component';
import { EroreComponent } from './compunent/error/erore.component';
import { AboutUsComponent } from './compunent/about-us/about-us.component';
import { ContactUsComponent } from './compunent/contact-us/contact-us.component';
import { ProductDetailsComponent } from './compunent/product-details/product-details.component';
import { LoginComponent } from './compunent/login/login.component';
import { SignUpComponent } from './compunent/sign-up/sign-up.component';
import { CartComponent } from './compunent/cart/cart.component';
import { ProfileComponent } from './compunent/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'ShopVibe - Egyptian Tech & Lifestyle Gear'
      },
      {
        path: 'products',
        component: ProdicuteComponent,
        title: 'ShopVibe - Products Catalog & Accessories'
      },
      {
        path: 'ProductDetails/:Prdid',
        component: ProductDetailsComponent,
        title: 'ShopVibe - Product Details'
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'ShopVibe - Shopping Cart & Checkout'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'ShopVibe - My Account & Orders'
      },
      {
        path: 'Card',
        component: AboutUsComponent,
        title: 'ShopVibe - About Us'
      },
      {
        path: 'about',
        component: AboutUsComponent,
        title: 'ShopVibe - About Us'
      },
      {
        path: 'Contact',
        component: ContactUsComponent,
        title: 'ShopVibe - Contact Support'
      },
      {
        path: 'contact',
        component: ContactUsComponent,
        title: 'ShopVibe - Contact Support'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'ShopVibe - Sign In'
      },
      {
        path: 'signup',
        component: SignUpComponent,
        title: 'ShopVibe - Create Account'
      }
    ],
  },
  { path: '**', component: EroreComponent, title: 'ShopVibe - Page Not Found' }
];
