import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from './cart-item/cart-item';
import { CartPage } from './cart-page/cart-page';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartItem,
    CartPage,
  ],
  exports: [
    CartItem,
    CartPage,
  ]
})
export class CartModule { }
