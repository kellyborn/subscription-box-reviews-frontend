import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
  }



  addReview(form: NgForm): void {
    // console.log(form.value);
    this.service.addReview(form.value).subscribe(() => {
      form.reset();
    })
  }
}
