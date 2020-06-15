import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';
import { FeatureReviewComponent } from './feature-review/feature-review.component';
import { CategoryReviewComponent } from './category-review/category-review.component';


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    ReviewComponent,
    FeatureReviewComponent,
    CategoryReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
