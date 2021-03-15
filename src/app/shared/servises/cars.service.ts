import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../entities/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  carsUrl: string = '/cars';
  allCars: Array<Car>;
  carsCategories: Set<string> = new Set<string>();

  constructor(private http: HttpClient) { }

  getAllCars(): void {
    this.http.get<Array<Car>>(this.carsUrl).subscribe(
      res => { 
        this.allCars = res;
        this.takeAllCategories();
      },
      err => console.log(err)
    );
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
}
