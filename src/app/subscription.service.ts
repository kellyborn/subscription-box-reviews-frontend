import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  apiURL: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAllItems(): any {
    return this.http.get(`${this.apiURL}/home`)
  }

  addReview(review: any): any {
    return this.http.post(`${this.apiURL}/home`, review)
  }
}
