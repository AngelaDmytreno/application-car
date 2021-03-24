import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmCardCarComponent } from './sm-card-car/sm-card-car.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





  


@NgModule({
  declarations: [SmCardCarComponent, FormComponent],
  exports: [SmCardCarComponent, FormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,

 

  
  ]
})
export class SharedComponentsModule { }
