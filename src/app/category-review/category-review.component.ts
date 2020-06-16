import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-review',
  templateUrl: './category-review.component.html',
  styleUrls: ['./category-review.component.css']
})
export class CategoryReviewComponent implements OnInit {
  subscriptions: any[] = [];

  //active route to subscribe to query parameters
  constructor(private service: SubscriptionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response);
      if (response.type === 'meat') {
        this.getSubscription('meat');
      } else if (response.type === 'veggies') {
        this.getSubscription('veg');
      } else if (response.type === 'mealprep') {
        this.getSubscription('mealprep');
      }
      // stretch add 404 page
    })

    console.log(this.subscriptions);
    console.log("ngOnInit")
  }

  //when View Subscription Details BUTTON is clicked we need to go to the details page and show the details of that box
  // showSubscriptionDetails

  getSubscription(type: string) {
    this.service.getSubscription(type).subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  }


}
