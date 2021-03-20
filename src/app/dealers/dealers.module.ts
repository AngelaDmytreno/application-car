import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealersComponent } from './dealers/dealers.component';
import { DealersRoutingModule } from './dealers-routing.module';
import {MatButtonModule} from '@angular/material/button'; 
import { TableComponent } from '../dealers/table/table.component'



@NgModule({
  declarations: [
    DealersComponent,
    TableComponent
  ],
  exports: [DealersComponent],
  imports: [
    CommonModule,
    DealersRoutingModule,
    MatButtonModule
  ],
  providers: []
})
export class DealersModule { }
