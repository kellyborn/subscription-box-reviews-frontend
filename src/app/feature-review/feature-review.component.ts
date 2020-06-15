import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-feature-review',
  templateUrl: './feature-review.component.html',
  styleUrls: ['./feature-review.component.css']
})
export class FeatureReviewComponent implements OnInit {

  reviews: any[] = [];

  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews() {
    this.service.getAllReviews().subscribe(response => {
      this.reviews = response;
      console.log(this.reviews);
    })
  };

}
