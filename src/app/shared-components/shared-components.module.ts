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
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule   } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmationDialogComponent } from "../shared-components/confirmation-dialog/confirmation-dialog.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarFormComponent } from './car-form/car-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DetailsCarComponent } from './details-car/details-car.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DialogCarFormComponent } from './dialog-car-form/dialog-car-form.component'; 


@NgModule({
  declarations: [SmCardCarComponent, FormComponent, ConfirmationDialogComponent, CarFormComponent, DetailsCarComponent, EditCarComponent, DialogCarFormComponent],
  
  exports: [SmCardCarComponent, FormComponent, ConfirmationDialogComponent, CarFormComponent, DetailsCarComponent, EditCarComponent, DialogCarFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule,
    MatSelectModule,
    MatAutocompleteModule
    


  ],
 
  entryComponents: [
    ConfirmationDialogComponent, CarFormComponent, DetailsCarComponent
  ]
})
export class SharedComponentsModule { }
