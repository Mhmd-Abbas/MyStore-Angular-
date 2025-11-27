import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class GetProduct {

  constructor( private http: HttpClient ) { }
  
  getProduct(id: number): Observable<Product|undefined> {
    return this.http.get<Product[]>('/assets/data.json')
    .pipe(
      map( (products: Product[]) => products.find(p => p.id === id))
    )
  }
  
}
