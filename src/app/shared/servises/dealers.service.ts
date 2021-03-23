import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dealers } from 'src/app/dealers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealersService {
  private dealersUrl: string = '/dealers';

  constructor(private http: HttpClient){ }

  getAllDealers(): Observable<Array<Dealers>> {
    return this.http.get<Array<Dealers>>(this.dealersUrl);
  }
}
