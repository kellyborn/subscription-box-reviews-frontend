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

  getMeatFeaturedReviews(): any {
    return this.http.get(`${this.apiURL}/meatfeaturedreviews`)
  }

  getVegFeaturedReviews(): any {
    return this.http.get(`${this.apiURL}/vegfeaturedreviews`)
  }

  getMealPrepFeaturedReviews(): any {
    return this.http.get(`${this.apiURL}/mealprepfeaturedreviews`)
  }

  getSubscriptionDetails(): any {
    return this.http.get(`${this.apiURL}/subscriptiondetails`)
  }

  addReview(review: any): any {
    return this.http.post(`${this.apiURL}/home`, review)
  }


}
