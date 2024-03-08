import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { map, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminServiceService {
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}  
  
  contactForm(body: any) {
    return this.http.post(this.apiUrl + "/v1/customer/contact", body).pipe(
      map((res: any) => {
      return res;
      })
    );
  }
 
}
