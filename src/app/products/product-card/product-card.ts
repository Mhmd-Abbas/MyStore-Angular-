import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{ product: Product; quantity: number }>();

  selectedQty: number = 1;

  constructor(private router: Router) {}

  onClick(id: number) {
    this.router.navigate(['/products', id]);
  }

  addToCartClicked() {
    this.addToCart.emit({ product: this.product, quantity: this.selectedQty });
    alert('Product has been added to cart');
  }
}