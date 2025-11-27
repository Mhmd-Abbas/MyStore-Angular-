import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/Product';
import { GetProduct } from '../../services/get-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  //@ts-ignore
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private getProduct: GetProduct
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
}
