import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureReviewComponent } from './feature-review.component';

describe('FeatureReviewComponent', () => {
  let component: FeatureReviewComponent;
  let fixture: ComponentFixture<FeatureReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
