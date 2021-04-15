import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { ByCategoryCarsComponent } from './by-category-cars/by-category-cars.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { CarsRoutingModule } from './cars-routing.model';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { SmCardCarComponent } from '../shared-components/sm-card-car/sm-card-car.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CarsComponent,
    ByCategoryCarsComponent,
    AllCarsComponent,
  
    
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
    MatButtonModule,
    MatInputModule,
    SharedComponentsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  
  ]
})
export class CarsModule { }
