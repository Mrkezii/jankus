import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { User } from '../manager/user.model'; 


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private serviceUrl = 'http://localhost:7070/products/test';
  private posturl = 'http://localhost:7070/products/create';
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get<User[]>(this.serviceUrl);
  }

}
