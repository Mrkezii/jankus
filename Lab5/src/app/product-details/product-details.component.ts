import { Component, OnInit } from '@angular/core';
import { Productdemo } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  products: Productdemo;

 // @Input() products: Productdemo;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {}

    ngOnInit(): void {
      this.getProducts();
    }
     getProducts(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      //this.productService.getProd(id)
     // .subscribe(products => this.products = products);
    }
    goBack(): void {
      this.location.back();
    }
}
