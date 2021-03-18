import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../entities/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  carsUrl: string = '/cars';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.carsUrl);
  }
}
