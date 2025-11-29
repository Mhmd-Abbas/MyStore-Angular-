import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/Product';
import { GetProduct } from '../../services/get-product';
import { CartService } from '../../services/cart-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  //@ts-ignore
  product: Product;
  selectedQty: number = 1 

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private getProduct: GetProduct,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      if (id) {
        this.getProduct.getProduct(id).subscribe((data) => {
          this.product = data ?? {
            id: -1,
            name: 'Not Found',
            description: 'Not Found',
            url: '',
            price: 0,
          };
          this.cdr.markForCheck();
        });
      }
    });
  }

  addToCartClicked(){
    this.cartService.addToCart(this.product, this.selectedQty)
    alert("Product has been added to cart")
  }
  
}
