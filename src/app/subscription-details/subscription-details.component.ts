import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  subscriptionDetails: any[] = [];

  constructor(private service: SubscriptionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response);
      this.getSubscriptionDetails(response.id);
    })
  }

  getSubscriptionDetails(id: any) {
    this.service.getSubscriptionDetails(id).subscribe(response => {
      this.subscriptionDetails = response;
      console.log(this.subscriptionDetails);
    })
  };

}
