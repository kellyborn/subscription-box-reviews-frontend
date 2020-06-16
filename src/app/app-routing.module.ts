import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureReviewComponent } from './feature-review/feature-review.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [

  { path: "home", component: FeatureReviewComponent },
  { path: "subscriptions", component: SubscriptionComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
