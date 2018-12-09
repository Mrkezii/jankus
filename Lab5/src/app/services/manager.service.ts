import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
// import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Type } from "@angular/compiler";
import { User } from "../manager/user.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class ManagerService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}`,
        +`body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return console.log("Something bad happened; please try again later.");
  }
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
    const url = `${this.putUrl}/${user["_id"]}/update`;
    console.log(url);
    console.log(user);
    return this.http.put<User>(url, user);
  }
}
