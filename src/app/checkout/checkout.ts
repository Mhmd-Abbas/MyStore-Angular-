import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  FullName: string = '';
  Address: string = '';
  CreditCardNumber: string = '';

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  SubmitClick() {
    if (this.cartService.totalItems() === 0) {
      alert('Your cart is empty!');
    } else {
      this.cartService.setUserName(this.FullName);
      this.router.navigate(['/success']);
    }
  }
}
