import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmCardCarComponent } from './sm-card-car/sm-card-car.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SmCardCarComponent],
  exports: [SmCardCarComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SharedComponentsModule { }
