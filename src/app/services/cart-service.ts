import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemModel } from '../models/CartItemModel';
import { Product } from '../models/Product';

const STORAGE_KEY = 'myapp_cart_v1';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items$ = new BehaviorSubject<CartItemModel[]>(this.load());
  readonly items$ = this._items$.asObservable();

  private load(): CartItemModel[] {
    try {
      const raw = localStorage.getItem('myapp_cart_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(items: CartItemModel[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
    this._items$.next(items);
  }

  getItemsSnapshot(): CartItemModel[] {
    return this._items$.value;
  }

  addToCart(product: Product, qnty: number = 1) {
    if (!product) return;
    const items = [...this.getItemsSnapshot()];
    const idx = items.findIndex((i) => i.product.id === product.id);

    if (idx > -1) {
      items[idx].qnty = Math.min((items[idx].qnty || 0) + qnty, 10);
    } else {
      items.push({
        UserName: "",
        product,
        qnty: Math.min(qnty, 10),
      });
    }

    this.save(items);
  }

  remove(productId: number) {
    const items = this.getItemsSnapshot().filter((i) => i.product.id !== productId);
    this.save(items);
  }

  clear() {
    this.save([]);
  }

  totalItems(): number {
    return this.getItemsSnapshot().reduce((s, i) => s + i.qnty, 0);
  }

  totalPrice(): number {
    return Number(this.getItemsSnapshot().reduce((s, i) => s + i.product.price * i.qnty, 0).toFixed(2));
  }

  getUserName(): string {
    if (this.getItemsSnapshot().length === 0) return ""
    return this.getItemsSnapshot()[0].UserName
  }

  setUserName(userName: string) {
    const items = [...this.getItemsSnapshot()];
    items[0].UserName = userName;
    this.save(items);
  }
}
