import { Component, OnInit , Input } from '@angular/core';
import { Productdemo } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  @Input() products: Productdemo;

  constructor() { }

  ngOnInit() {
  }

}
