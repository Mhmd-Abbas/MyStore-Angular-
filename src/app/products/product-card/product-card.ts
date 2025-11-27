import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  //@ts-ignore
  @Input() product:Product
  selectedQty: number = 1 

  constructor( 
    private router:Router,
    private cart: CartService
   ) {}

  onClick(id: number){
    this.router.navigate(["/products", id])
  }

  addToCartClicked(){
    this.cart.addToCart(this.product, this.selectedQty)
    alert("Product has been added to cart")
  }

}
