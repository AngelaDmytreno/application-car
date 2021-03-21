import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Car } from '../entities/car.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  
  // searchCars(term: string): Observable<Car[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Car[]>(`${this.carsUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Car[]>('searchHeroes', []))
  //   );
  // }
 
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
 
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
 
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
 
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // private log(message: string):void {
  //   `CarsService: ${message}`;
  // }
  
}


