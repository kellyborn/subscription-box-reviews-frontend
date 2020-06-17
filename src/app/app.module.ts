import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';
import { FeatureReviewComponent } from './feature-review/feature-review.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { HeaderComponent } from './header/header.component';
import { SubscriptionReviewsComponent } from './subscription-reviews/subscription-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    FeatureReviewComponent,
    SubscriptionsComponent,
    SubscriptionDetailsComponent,
    HeaderComponent,
    SubscriptionReviewsComponent
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
