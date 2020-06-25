import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.homeRoute.queryParams.subscribe(response => {
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
    this.homeRoute.url.subscribe(response => {
      if (response[0].path === 'home') {
        this.heading = null;
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


