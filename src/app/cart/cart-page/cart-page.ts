import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from '../../services/cart-service';
import { Checkout } from '../../checkout/checkout';

@Component({
  selector: 'app-cart-page',
  imports: [CartItem, Checkout],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  cartItems: CartItemModel[] = [];
  Total: number = 0

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe( items => {
      this.cartItems = items
      this.Total = this.cartService.totalPrice()
    });
    
  }

  clearCart() {
    this.cartService.clear();
    alert("Cart has been cleared");
  }

}
