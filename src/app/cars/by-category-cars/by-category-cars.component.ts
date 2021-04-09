import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { takeWhile } from 'rxjs/operators';
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
  isDataLoading: boolean;
  firstSelected: any = true;
  isAlive: boolean = true;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
  
    this.carsService.getAllCars()
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe(
      res => { 
        this.allCars = res;
        this.isDataLoading = false;
        this.takeAllCategories();
        this.takeCarsByCategory(this.carsCategories[0]);
      
      },
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
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
    this.firstSelected = false;
  }

  tabChange(event: any): void {
    const cars = this.takeCarsByCategory(event.tab.textLabel.toLowerCase());
    this.selectedCar = cars[0];
    this.firstSelected = true;
  }

  takeCarsByCategory(category: string): Array<Car> {
    this.carsByCategory = this.allCars.filter((car: Car) => category === "other" ? !car.category : car.category === category);
    return this.carsByCategory;
  }
}
