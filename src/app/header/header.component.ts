import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toggleDisplay();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  route(where: string) {
    this.router.navigate(["/subscriptions"], { queryParams: { type: where } })
  }

}


