import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  subscriptionDetails: any;

  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.getSubscriptionDetails();
  }

  getSubscriptionDetails() {
    this.service.getSubscriptionDetails().subscribe(response => {
      this.subscriptionDetails = response;
      console.log(this.subscriptionDetails);
    })
  };

}
