import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: any[] = [];

  //active route to subscribe to query parameters
  constructor(private service: SubscriptionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllSubs();
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
  routeDetails(id: number) {
    console.log(id);
    this.router.navigate(["/subdetails"], { queryParams: { id: id } })
  }

  getSubscription(type: string) {
    this.service.getSubscription(type).subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  }

  getAllSubs() {
    this.service.getAllSubs().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  }


}
