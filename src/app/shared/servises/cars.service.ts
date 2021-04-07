import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../../car'
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { DealersService } from './dealers.service';
import { Dealers } from 'src/app/dealers';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl: string = '/cars';
 
  constructor(private http: HttpClient, private dealersService: DealersService ) { }
  
  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.carsUrl);
  }
  updateCars (car: Car): Observable<Car> {
    console.log(car);
    return this.http.put<Car>(`${this.carsUrl}.json`, car, httpOptions);
  }

  getCarById(id: string): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url);
  }
  // deleteCarById(car: Car | string): Observable<Car> {
  deleteCarById(car: Car): Observable<Car> {
    // const id: string = typeof car === 'string' ? car : car.id;
    // const url: string = `${this.carsUrl}/${id}`;
    // console.log('url: ', url);
    const url: string = `${this.carsUrl}/${car.id}`;
    return this.http.delete<Car>(url, httpOptions).pipe(
      switchMap(() => this.dealersService.getDealerById(car.brand)),
    switchMap((dealer: Dealers) =>
      this.dealersService.updateDealers({
        ...dealer,
        amountOfCars: dealer.amountOfCars - 1,
      })
    )
    
    );
  }
 
  insertCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.carsUrl}.json`, car, httpOptions).pipe(
      switchMap(() => this.dealersService.getDealerById(car.brand)),
    switchMap((dealer: Dealers) =>
      this.dealersService.updateDealers({
        ...dealer,
        amountOfCars: dealer.amountOfCars + 1,
      })
    )
    
    );
  }

 
  
}


