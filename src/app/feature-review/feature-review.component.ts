import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-feature-review',
  templateUrl: './feature-review.component.html',
  styleUrls: ['./feature-review.component.css']
})
export class FeatureReviewComponent implements OnInit {

  topReviews: any[] = [];

  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.getMeatFeaturedReviews();
    this.getVegFeaturedReviews();
    this.getMealPrepFeaturedReviews();
  }

  findTopRating(response) {
    let topRating = response[0];
    response.forEach((review) => {
      if (review.rating > topRating.rating) {
        topRating = review;
      }
    });
    this.topReviews.push(topRating);
  }

  getMeatFeaturedReviews() {
    this.service.getMeatFeaturedReviews().subscribe((response) => {
      this.findTopRating(response);
    })
  };

  getVegFeaturedReviews() {
    this.service.getVegFeaturedReviews().subscribe(response => {
      this.findTopRating(response);
    })
  };

  getMealPrepFeaturedReviews() {
    this.service.getMealPrepFeaturedReviews().subscribe(response => {
      this.findTopRating(response);
    })
  };


}
