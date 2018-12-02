import { Component, OnInit } from '@angular/core';
import { Productdemo } from '../models/product.model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product: Productdemo[] = [];
  constructor(public productService: ProductService) { }
  ngOnInit() {this.getProducts();
  }
  getProducts(): void {
    this.productService.getProduct()
    .subscribe(product => this.product = product.slice(1, 5 ));
}
}
