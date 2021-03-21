import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Car } from '../../shared/entities/car.interface';
import { CarsService } from '../../shared/servises/cars.service';

@Component({
  selector: 'app-by-category-cars',
  templateUrl: './by-category-cars.component.html',
  styleUrls: ['./by-category-cars.component.scss']
})
export class ByCategoryCarsComponent implements OnInit {

  allCars: Array<Car> = new Array<Car>();
  carsCategories: Set<string> = new Set<string>();
  carsByCategory: Array<Car>;
  selectedCar: Car;
  activeLink: string;
  background: ThemePalette = undefined;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(
      res => { 
        this.allCars = res;
        this.takeAllCategories();
        this.takeCarsByCategory(this.carsCategories[0]);
      },
      err => console.log(err)
    );
  }

  takeAllCategories(): void {
    this.allCars.forEach((car: Car )=> {
      if (car.category != null) {
        this.carsCategories.add(car.category);
      }
    });
    this.carsCategories.add('other');
  }

  selectCar(car: Car): void {
    this.selectedCar = car;
    console.log(this.selectedCar);
  }

  tabChange(event: any): void {
    const cars = this.takeCarsByCategory(event.tab.textLabel.toLowerCase());
    this.selectedCar = cars[0];
  }

  takeCarsByCategory(category: string): Array<Car> {
    // console.log(category);//Почему повторяет много раз категорий? оно что каждый раз ильт делает?
    this.carsByCategory = this.allCars.filter((car: Car) => category === "other" ? !car.category : car.category === category);
    return this.carsByCategory;
  }
}
