import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  imports: [],
  templateUrl: './success-page.html',
  styleUrl: './success-page.css',
})
export class SuccessPage implements OnInit, OnDestroy{
  FullName: string = ""
  Total: number = 0

  constructor(
    private router: Router,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.FullName = this.cartService.getUserName()
    this.Total = this.cartService.totalPrice()
  }

  goBack() {
     this.router.navigate(['/']);
  }

  ngOnDestroy() {
    console.log("called")
    this.cartService.clear();
    location.reload();
  }
}
