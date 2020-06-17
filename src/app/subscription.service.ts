import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  apiURL: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAllSubs(): any {
    return this.http.get(`${this.apiURL}/subscriptions`)
  }

  // GET subscriptions by type (meat, veg, mealprep)
  getSubscription(type: string): any {
    return this.http.get(`${this.apiURL}/subscription`, { params: { type: type } })
  }

  getAllReviews(): any {
    return this.http.get(`${this.apiURL}/reviews`)
  }

  getSubscriptionDetails(id: any): any {
    return this.http.get(`${this.apiURL}/subscriptiondetails`, { params: { id: id } })
  }

  addReview(review: any): any {
    return this.http.post(`${this.apiURL}/home`, review)
  }


}

