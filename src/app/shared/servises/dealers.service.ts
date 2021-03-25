import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dealers } from 'src/app/dealers';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DealersService {
  
  
  private dealersUrl: string = '/dealers';


  
  constructor(private http: HttpClient ){ 
   
  }

  //post
  insertDealers(): void {
    const dealers: Dealers = {
      id: 'ad',
      name: 'name',
      headquarters: 'headquarters',
      // amountOfCars: 1,
      country: 'country',
      foundedIn: 1,
      // newRecord: true,
     
    };
    this.http.post<Dealers>(`${this.dealersUrl}.json`,dealers, httpOptions ).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  //get
  getAllDealers(): any {
    return this.http.get<Array<Dealers>>(`${this.dealersUrl}.json`, httpOptions);
  }
  //updatw
  updateDealers (dealers: Dealers): Observable<any> {
    return this.http.put(this.dealersUrl, dealers, httpOptions); 
    
  }
  // delet
  // deleteDealers(dealers: Dealers): Observable<any> {
   
  //   const url = `${this.dealersUrl}/${id}`;

  //   return this.http.delete<Dealers>(url, dealers)
  //   // return this.http.delete<Dealers>(`${this.dealersUrl}.json`, dealers);
  // }

  deleteDealer(dealer: Dealers | string): Observable<Dealers> {
    const id: string = typeof dealer === 'string' ? dealer : dealer.id;
    const url: string = `${this.dealersUrl}/${id}`;
    console.log('url: ', url);
    return this.http
      .delete<Dealers>(url, httpOptions);
  }
}
