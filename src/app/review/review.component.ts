import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: any;

  constructor(private service: SubscriptionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      this.id = response.id;
    })
  }

  addReview(form: NgForm): void {
    let newReview = form.value;
    newReview.subscription_id = this.id;
    this.service.addReview(newReview).subscribe(() => {
      console.log("THIS THIS POST?")
      console.log(newReview)
      this.router.navigate(["/subdetails"], { queryParams: { id: this.id } })
      console.log("THIS THIS POST?")
    })
  }
}
