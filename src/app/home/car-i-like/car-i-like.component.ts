import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';
import { Dealers } from 'src/app/dealers';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-car-i-like',
  templateUrl: './car-i-like.component.html',
  styleUrls: ['./car-i-like.component.scss']
})
export class CarILikeComponent implements OnInit {

  carItems: Array<Car> = new Array<Car>();
  allCarListItems: Array<Car> = new Array<Car>();
  isDataLoading: boolean;
  allDealersList: Array<Dealers> = new Array<Dealers>();
  isAlive: boolean;




  constructor(public carsService: CarsService, public dealerService: DealersService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.carsService.getAllCars()
      .pipe(takeWhile(() => (this.isAlive = true)))
      .subscribe(
        res => {
          this.allCarListItems = res;
          // this.getFavoriteCars();
          this.carItems = this.getFavoriteCars();
          this.isDataLoading = false;
        },
        err => console.log(err)
      );

    this.dealerService.getAllDealers().pipe(takeWhile(() => (this.isAlive = true)))
      .subscribe(
        res => {
          this.allDealersList = res;
        },
        err => console.log(err)
      );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  getBrandName(brand: string): string {
    const dealer = this.allDealersList.find((dealer: Dealers) => dealer.id === brand);
    return dealer ? dealer.name : '';
  }

  getFavoriteCars(): any {
    return this.allCarListItems.filter(el => el.liked);
  }
}


