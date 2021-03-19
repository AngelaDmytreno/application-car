import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { ByCategoryCarsComponent } from './by-category-cars/by-category-cars.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
// import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { CarsRoutingModule } from './cars-routing.model';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [
    CarsComponent,
    ByCategoryCarsComponent,
    AllCarsComponent,
    // SlideToggleComponent
  ],
  exports: [CarsComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    CarsRoutingModule,
    MatButtonModule
    
  ]
})
export class CarsModule { }
