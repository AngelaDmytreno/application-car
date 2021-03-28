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

  constructor(private http: HttpClient ) {}

  insertDealers(dealer: Dealers): Observable<Dealers> {
    return this.http.post<Dealers>(`${this.dealersUrl}.json`, dealer, httpOptions);
  }
  getAllDealers(): any {
    return this.http.get<Array<Dealers>>(`${this.dealersUrl}.json`, httpOptions);
  }
  postDealers(dealer: Dealers):any {
    return this.http.post(`${this.dealersUrl}.json`, dealer, httpOptions);
  }
  updateDealers (dealers: Dealers): Observable<any> {
    return this.http.put(this.dealersUrl, dealers, httpOptions);  
  }
  deleteDealer(dealer: Dealers | string): Observable<Dealers> {
    const id: string = typeof dealer === 'string' ? dealer : dealer.id;
    const url: string = `${this.dealersUrl}/${id}`;
    console.log('url: ', url);
    return this.http
      .delete<Dealers>(url, httpOptions);
  }
}
