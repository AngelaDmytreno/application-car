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
      },
      err => console.log(err)
    );
    // this.activeLink = this.carsCategories[0];
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

  takeCarsByCategory(category: string): any {
    return  this.allCars.filter((car: Car) => category === "other" ? !car.category : car.category === category);
  }
}
