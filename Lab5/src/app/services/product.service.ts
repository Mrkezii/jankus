import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Productdemo } from '../models/product.model';
import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import { CachingServiceBase } from './caching.service';
import { PRODUCT } from '../products/mock.product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private messageService: MessageService) { }
  getProduct(): Observable<Productdemo[]> {
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCT);
  }
}

