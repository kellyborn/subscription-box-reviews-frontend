import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  subscriptionDetails: any[] = [];
  averageCost: any;

  constructor(private service: SubscriptionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.getSubscriptionDetails(response.id);
      this.getSubscriptionDetailsAvg(response.id);
    })
  }

  getSubscriptionDetails(id: any) {
    this.service.getSubscriptionDetails(id).subscribe(response => {
      this.subscriptionDetails = response;
    })
  };

  getSubscriptionDetailsAvg(id: any) {
    this.service.getSubscriptionDetailsAvg(id).subscribe(response => {
      console.log(response)
      this.averageCost = Number(response);
      console.log(this.averageCost)
    })
  };

  routeReviews(id: number) {
    console.log(id);
    this.router.navigate(["/subscription-reviews"], { queryParams: { id: id } })
  }

  routeWriteReviews(id: number) {
    console.log(id);
    this.router.navigate(["/write-reviews"], { queryParams: { id: id } })
  }

}
