import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCategoryCarsComponent } from './by-category-cars.component';

describe('ByCategoryCarsComponent', () => {
  let component: ByCategoryCarsComponent;
  let fixture: ComponentFixture<ByCategoryCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCategoryCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCategoryCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
