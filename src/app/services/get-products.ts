import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class GetProducts {

  constructor( private http: HttpClient ) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json')
  }

}
