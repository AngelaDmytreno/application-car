import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCarComponent } from '../shared-components/details-car/details-car.component';
import { CarsComponent } from './cars/cars.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent,
   },
   {path: 'cars/:id', component: DetailsCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
