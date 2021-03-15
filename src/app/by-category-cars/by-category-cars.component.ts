import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/entities/car.interface';
import { CarsService } from '../shared/servises/cars.service';

@Component({
  selector: 'app-by-category-cars',
  templateUrl: './by-category-cars.component.html',
  styleUrls: ['./by-category-cars.component.scss']
})
export class ByCategoryCarsComponent implements OnInit {

  allCars: Array<Car> = new Array<Car>();
  categories: Set<string> = new Set<string>();
  carsByCategory: Array<Car> = new Array<Car>();

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars();
    this.allCars = this.carsService.allCars;
    this.categories = this.carsService.carsCategories;
  }



  takeCarsByCategory(category: string): void {
    this.carsByCategory = this.allCars.map((car: Car) => {
      if (car.category === category) {
        return car;
      }
    });
  }
}
