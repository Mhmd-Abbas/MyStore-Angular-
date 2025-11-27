import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart-service';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  count = 0

  constructor(private cart: CartService) {
    this.cart.items$.subscribe( items => this.count = items.reduce( (s,i) => s + i.qnty, 0 ) )
  }

}
