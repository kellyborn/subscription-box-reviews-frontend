import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureReviewComponent } from './feature-review/feature-review.component';
import { CategoryReviewComponent } from './category-review/category-review.component';


const routes: Routes = [

  { path: "home", component: FeatureReviewComponent },
  { path: "category-review", component: CategoryReviewComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
