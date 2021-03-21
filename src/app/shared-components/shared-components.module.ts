import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmCardCarComponent } from './sm-card-car/sm-card-car.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 




@NgModule({
  declarations: [SmCardCarComponent],
  exports: [SmCardCarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedComponentsModule { }
