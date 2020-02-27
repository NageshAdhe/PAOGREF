import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
//import { map } from "rxjs/operators";
//import { AppConstants } from "../constants/appConstants";
// import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

// import { Observable } from "rxjs";
// import { catchError } from "rxjs/operators";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     Authorization: "my-auth-token"
//   })
// };

// let httpheaders1 = new HttpHeaders({
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
//   Authorization: "my-auth-token"
// });

@Injectable({
  providedIn: "root"
})
export class MasterService {
  //   _baseURL: string;

  constructor(private http: Http, private httpClient: HttpClient) {
    //  this._baseURL = AppConstants.baseURL;
  }

  get(url) {
    return this.http.get(url);
  }
}
