import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCarComponent } from '../shared-components/details-car/details-car.component';
import { CarsComponent } from './cars/cars.component';
import { EditCarComponent } from '../shared-components/edit-car/edit-car.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id', component: DetailsCarComponent },
  { path: 'cars/:id/edit', component: EditCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
