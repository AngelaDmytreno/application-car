import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaelrspageComponent } from './daelrspage.component';

describe('DaelrspageComponent', () => {
  let component: DaelrspageComponent;
  let fixture: ComponentFixture<DaelrspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaelrspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaelrspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
