import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { DealersComponent } from './dealers/dealers.component';
import { HomeComponent } from './home/home/home.component';


export const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'dealers', component: DealersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
