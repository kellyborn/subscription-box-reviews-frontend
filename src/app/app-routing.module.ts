import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureReviewComponent } from './feature-review/feature-review.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { SubscriptionReviewsComponent } from './subscription-reviews/subscription-reviews.component';


const routes: Routes = [

  { path: "home", component: FeatureReviewComponent },
  { path: "subscriptions", component: SubscriptionsComponent },
  { path: "subdetails", component: SubscriptionDetailsComponent },
  { path: "subscription-reviews", component: SubscriptionReviewsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
