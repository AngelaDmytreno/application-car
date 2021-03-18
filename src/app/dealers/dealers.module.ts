import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealersComponent } from './dealers/dealers.component';
import { DealersRoutingModule } from './dealers-routing.module';



@NgModule({
  declarations: [DealersComponent],
  exports: [DealersComponent],
  imports: [
    CommonModule,
    DealersRoutingModule
  ],
  providers: []
})
export class DealersModule { }
