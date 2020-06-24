import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feature-review',
  templateUrl: './feature-review.component.html',
  styleUrls: ['./feature-review.component.css']
})
export class FeatureReviewComponent implements OnInit {

  topReviews: any[] = [];
  categories: string[] = ['meat', 'veg', 'mealprep']

  constructor(private service: SubscriptionService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < this.categories.length; i++) {
      this.getFeaturedReviews(this.categories[i]);
    };
  };

  findTopRating(response) {
    let topRating = response[0];
    response.forEach((review) => {
      if (review.rating > topRating.rating) {
        topRating = review;
      };
    });
    this.topReviews.push(topRating);
  };

  getFeaturedReviews(type: string) {
    this.service.getFeatureReview(type).subscribe((response) => {
      this.findTopRating(response);
    });
  };

  routeDetails(id: number) {
    this.router.navigate(["/subdetails"], { queryParams: { id: id } })
  }


};
