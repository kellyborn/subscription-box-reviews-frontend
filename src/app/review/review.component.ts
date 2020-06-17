import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: any;

  constructor(private service: SubscriptionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log("response below")
      console.log(response);
      this.id = response.id;
      console.log(this.id)
    })
  }

  addReview(form: NgForm): void {
    let newReview = form.value;
    newReview.subscription_id = this.id;
    console.log(newReview);
    this.service.addReview(newReview).subscribe(() => {
      form.reset();
    })
  }
}
