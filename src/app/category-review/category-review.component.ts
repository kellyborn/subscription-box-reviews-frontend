import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';


@Component({
  selector: 'app-category-review',
  templateUrl: './category-review.component.html',
  styleUrls: ['./category-review.component.css']
})
export class CategoryReviewComponent implements OnInit {
  subscriptions: any[] = [];

  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.getMeatSubs();
    this.getVegSubs();
    this.getMealPrepSubs();
    console.log(this.subscriptions);
    console.log("ngOnInit")
  }

  //when View Subscription Details BUTTON is clicked we need to go to the details page and show the details of that box
  showSubscriptionDetails

  getMeatSubs() {
    this.service.getMeatSubs().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  };

  getVegSubs() {
    this.service.getVegSubs().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  };

  getMealPrepSubs() {
    this.service.getMealPrepSubs().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  };


}
