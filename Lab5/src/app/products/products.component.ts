import { Component, OnInit } from '@angular/core';
import { Productdemo } from '../models/product.model';
import { ProductService } from '../services/product.service';
//import { PRODUCT } from '../products/mock.product';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  //selectedProducts: Productdemo;
  product: Productdemo[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  //onSelect(products: Productdemo): void{ 
  // this.selectedProducts = products;
  //}
  getProducts(): void {
    this.productService.getProduct()
      .subscribe(product => this.product = product);
  }
}
