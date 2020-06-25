import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { report } from 'process';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;
  heading: string = null;
  constructor(private router: Router, private homeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.toggleDisplay();
    this.homeRoute.fragment.subscribe((response) => {
      console.log(response);
    })
    this.homeRoute.queryParams.subscribe(response => {
      console.log(response);
      if (response.type === 'meat') {
        this.heading = 'meat';
      } else if (response.type === 'veggies') {
        this.heading = 'veg';
      } else if (response.type === 'mealprep') {
        this.heading = 'mealprep';
      } else if (!response.type) {
        this.heading = 'all';
      }
    })
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  route(where: string) {
    this.router.navigate(["/subscriptions"], { queryParams: { type: where } })
    this.toggleDisplay();
  }
  routeDesktop(where: string) {
    this.router.navigate(["/subscriptions"], { queryParams: { type: where } })
  }



}


