import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealersComponent } from './dealers/dealers.component';
import { DealersRoutingModule } from './dealers-routing.module';
import {MatButtonModule} from '@angular/material/button'; 
import { TableComponent  } from '../dealers/table/table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormComponent } from '../shared-components/form/form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DealersComponent,
    TableComponent,
 
  ],
  exports: [DealersComponent],
  imports: [
    CommonModule,
    DealersRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    SharedComponentsModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    
    
  ],
  providers: []
})
export class DealersModule { }
