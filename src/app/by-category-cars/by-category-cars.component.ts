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
  carsCategories: Set<string> = new Set<string>();

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(
      res => { 
        this.allCars = res;
        this.takeAllCategories();
      },
      err => console.log(err)
    );
    this.allCars = this.carsService.allCars;
    this.categories = this.carsService.carsCategories;
  }


  takeAllCategories(): void {
    this.allCars.forEach((car: Car )=> {
      let category: string = 'other';
      if (car.category != null) {
        category = car.category;
      }
      this.carsCategories.add(category);
    });
  }
 
  takeCarsByCategory(category: string): void {
    this.carsByCategory = this.allCars.map((car: Car) => {
      if (car.category === category) {
        return car;
      }
    });
  }
}
