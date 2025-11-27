import { Component, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './products/products-module';
import { NavBar } from "./nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductsModule,
    NavBar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyStore');

}
