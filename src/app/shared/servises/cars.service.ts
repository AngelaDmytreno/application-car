import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../entities/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl: string = '/cars';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json' }),
  };

  constructor(private http: HttpClient) { }
  

  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.carsUrl);
  }
  // updateCar(car: Car): Observable<any> {
  //   return this.http.put(this.carsUrl, car, httpOptions).pipe(
  //     tap(_ => this.log(`updated car id=${car.liked}`)),
  //     catchError(this.handleError<any>('updateCar'))
  //   );
  // }
}
