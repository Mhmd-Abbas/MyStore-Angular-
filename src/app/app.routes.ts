import { Routes } from '@angular/router';
import { ProductList } from './products/product-list/product-list';
import { ProductDetails } from './products/product-details/product-details';
import { CartPage } from './cart/cart-page/cart-page';
import { SuccessPage } from './success-page/success-page';

export const routes: Routes = [
    { path:"", component: ProductList },
    { path:"products/:id", component: ProductDetails },
    { path: 'cart', component:CartPage },
    { path: 'success', component:SuccessPage }

];
