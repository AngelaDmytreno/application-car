import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { ByCategoryCarsComponent } from './by-category-cars/by-category-cars.component';
import { CarsTabsComponent } from './cars-tabs/cars-tabs.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CarsRoutingModule } from './cars-routing.model';






@NgModule({
  declarations: [
    CarsComponent,
    ByCategoryCarsComponent,
    CarsTabsComponent,
    AllCarsComponent,
    SlideToggleComponent
  ],
  exports: [CarsComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
