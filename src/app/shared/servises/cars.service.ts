import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../../car'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl: string = '/cars';
 
  constructor(private http: HttpClient) { }
  
  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.carsUrl);
  }
  updateCars (car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions); 
  }

  getCarById(id: string): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url);
  }
}


