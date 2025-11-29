import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item?: CartItemModel;
  @Output() removeItemClick = new EventEmitter<number>();

  removeItem(productId?: number) {
    if(productId){
      this.removeItemClick.emit(productId);
    }else{
      alert("There was a problem removing product");
    }
  }
}