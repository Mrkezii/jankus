import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Type } from "@angular/compiler";
import { User } from "../manager/user.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class ManagerService {
  private serviceUrl = "http://localhost:7070/products/test";
  private posturl = "http://localhost:7070/products/create";
  private putUrl = "http://localhost:7070/products";
  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get<User[]>(this.serviceUrl);
  }
  updateUser(user: User): Observable<User> {
    // httpOptions.headers = httpOptions.headers.set(
    //   "Authorization",
    //   "my-new-auth-token"
    // );
    const url = `${this.putUrl}/${user["_id"]}`;
    console.log(url);
    console.log(user);
    return this.http.put<User>(url, user);
  }
}
