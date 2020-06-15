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
  }

  getMeatSubs() {
    this.service.getMeatSubs().subscribe(response => {
      this.subscriptions = response;
      console.log(this.subscriptions);
    })
  };


}
