import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card/product-card';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductCard,
    ProductList,
    ProductDetails
  ],
  exports: [
    ProductCard,
    ProductList,
    ProductDetails
  ]
})
export class ProductsModule { }
