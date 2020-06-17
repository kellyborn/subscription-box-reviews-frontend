import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionReviewsComponent } from './subscription-reviews.component';

describe('SubscriptionReviewsComponent', () => {
  let component: SubscriptionReviewsComponent;
  let fixture: ComponentFixture<SubscriptionReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
