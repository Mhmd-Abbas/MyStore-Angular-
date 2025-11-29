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
  errorMsg: string = '';

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

validateForm() {
  this.errorMsg = '';

  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (specialCharRegex.test(this.FullName)) {
    this.errorMsg = 'Please remove any special characters from your name.';
    return;
  }

  if (specialCharRegex.test(this.Address)) {
    this.errorMsg = 'Please remove any special characters from your address.';
    return;
  }

  if (specialCharRegex.test(this.CreditCardNumber)) {
      this.errorMsg = 'Please remove any special characters from your credit card number.';
      return;
  }

  if (this.CreditCardNumber && this.CreditCardNumber.toString().length !== 16) {
      this.errorMsg = 'Credit card number must be exactly 16 digits.';
      return;
  }
}



}
