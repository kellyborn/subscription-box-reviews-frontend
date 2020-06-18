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

  getFeatureReview(type: string): any {
    return this.http.get(`${this.apiURL}/featurereview`, { params: { type: type } })
  }

  getAllReviews(): any {
    return this.http.get(`${this.apiURL}/reviews`)
  }

  // used for sub details and "all reviews for a subscription"
  getSubscriptionDetails(id: any): any {
    return this.http.get(`${this.apiURL}/subscriptiondetails`, { params: { id: id } })
  }

  //used to get AVG user_cost for Sub Details component
  getSubscriptionDetailsAvg(id: any): any {
    console.log(id);
    return this.http.get(`${this.apiURL}/subscriptiondetailsavg`, { params: { id: id } })
  }

  addReview(review: any): any {
    console.log("service adding review")
    console.log(review)
    return this.http.post(`${this.apiURL}/home`, review)
  }


}

