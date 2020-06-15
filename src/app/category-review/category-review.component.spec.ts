import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReviewComponent } from './category-review.component';

describe('CategoryReviewComponent', () => {
  let component: CategoryReviewComponent;
  let fixture: ComponentFixture<CategoryReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
