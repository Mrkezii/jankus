import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {Productdemo } from '../models/product.model';
import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import { CachingServiceBase } from './caching.service';
//import { PRODUCT } from '../products/mock.product';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private  productUrl =  'http://localhost:7070/products/test'
  constructor(private http: HttpClient ,
    private messageService: MessageService) { }

  getProduct(): Observable<Productdemo[]> {
    return this.http.get<Productdemo[]>(this.productUrl);
   // this.messageService.add('ProductService: fetched products');
   // return of(PRODUCT);
  }

    //getProd(id: number): Observable<Productdemo> {
      // TODO: send the message _after_ fetching the hero
      //this.messageService.add(`ProductService: fetched products id=${id}`);
      //return of(PRODUCT.find(products => products.id === id));
   // }
  }

