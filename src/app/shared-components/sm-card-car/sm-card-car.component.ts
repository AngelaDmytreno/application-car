import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/car';
import {MatButtonModule} from '@angular/material/button'; 
import { CarsService } from '../../shared/servises/cars.service';
import { RouterModule } from '@angular/router';
import { Dealers } from 'src/app/dealers';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { takeWhile } from 'rxjs/operators';
 
@Component({
  selector: 'app-sm-card-car',
  templateUrl: './sm-card-car.component.html',
  styleUrls: ['./sm-card-car.component.scss']
})
export class SmCardCarComponent implements OnInit {

  @Input('car-item') carItem: Car;
  @Input('card-type') cardType: string;
  @Input('brand') brand: string;

  isCardLg: boolean = false;
  isAlive: boolean;
  addParameter:boolean=false;

  constructor(public carsService: CarsService, public dealerService: DealersService) { }
  
  ngOnInit(): void { 
    if (this.cardType === 'lg') {
      this.isCardLg = true; 
    }
  }


  like(carItem: Car):void{
    this.carItem.liked = !this.carItem.liked;
    this.carsService.updateCars(this.carItem)
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe();
  }  
  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
