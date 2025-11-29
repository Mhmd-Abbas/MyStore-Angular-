import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from '../../services/cart-service';
import { Checkout } from '../../checkout/checkout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [CartItem, Checkout],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  cartItems: CartItemModel[] = [];
  Total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe((items) => {
      this.cartItems = items;
      this.Total = this.cartService.totalPrice();
    });
  }

  onRemoveItem(productId: number) {
    this.cartService.remove(productId);
    alert('Product has been removed from cart');
  }

  clearCart() {
    this.cartService.clear();
    alert('Cart has been cleared');
  }

  onSubmitCheckout(event: { fullName: string; address: string; cardNumber: string }) {
    this.cartService.setUserName(event.fullName);
    this.router.navigate(['/success']);
  }
}
