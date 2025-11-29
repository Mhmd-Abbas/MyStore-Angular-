import { Component, OnInit } from '@angular/core';
import { GetProducts } from '../../services/get-products';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/Product';
import { ProductState } from '../../services/product-state';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(
    private getProducts: GetProducts,
    private state: ProductState,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    if (this.state.products.length) {
      this.products = this.state.products;
    } else {
      this.getProducts.getProducts().subscribe(data => {
        this.products = data;
        this.state.products = data;
      });
    }

    this.getProducts.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddToCart(event: { product: Product; quantity: number }) {
    this.cart.addToCart(event.product, event.quantity);
  }
}