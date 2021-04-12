import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dealers } from 'src/app/dealers';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from './cars.service';
import { Car } from 'src/app/car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  private dealersUrl: string = '/dealers';

  constructor(private http: HttpClient) { }

  insertDealers(dealer: Dealers): Observable<Dealers> {
    return this.http.post<Dealers>(`${this.dealersUrl}.json`, dealer, httpOptions);
  }
  getAllDealers(): any {
    return this.http.get<Array<Dealers>>(`${this.dealersUrl}.json`, httpOptions);
  }
  
 
    getDealerById(id: string): Observable<Dealers> {
      const url = `${this.dealersUrl}/${id.toUpperCase()}`;
      return this.http.get<Dealers>(url);
    }
  
  updateDealers(dealers: Dealers): Observable<any> {
    return this.http.put(`${this.dealersUrl}.json`, dealers, httpOptions);
  }


  deleteDealer(dealer: Dealers | string): Observable<Dealers> {
    const id: string = typeof dealer === 'string' ? dealer : dealer.id;
    const url: string = `${this.dealersUrl}/${id}`;

    this.http.get<Array<Car>>('/cars').subscribe((cars: Array<Car>) => {
      const dealerCars = cars.filter((car: Car) => car.brand === id);
      dealerCars.forEach((car: Car) => {
        const carUrl: string = `/cars/${car.id}`;
        this.http.delete<Car>(carUrl, httpOptions).subscribe(
          (car: Car) => console.log(car),
          err => console.log(err)
          );
      });
    });
    return this.http
      .delete<Dealers>(url, httpOptions);
  }
}
