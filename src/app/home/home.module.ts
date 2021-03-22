import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycarsComponent } from './my-cars/mycars.component';
import { CarILikeComponent } from './car-i-like/car-i-like.component';
import { MyDealersComponent } from './my-dealers/my-dealers.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [    
    HomeComponent,
    MycarsComponent, 
    CarILikeComponent, 
    MyDealersComponent
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    MatButtonModule,
    SharedComponentsModule
  ],
  providers: []
})
export class HomeModule { }
