import { Component, Input } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {

  @Input() item?: CartItemModel;

  constructor( private cartService: CartService ) {}

  removeItem(productId?: number) {
    if(productId){
      this.cartService.remove(productId)
      alert("Product has been removed from cart")
    }else{
      alert("There was a problem removing product")
    }
  }

}
