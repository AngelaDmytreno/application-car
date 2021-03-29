import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';

@Component({
  selector: 'app-car-i-like',
  templateUrl: './car-i-like.component.html',
  styleUrls: ['./car-i-like.component.scss']
})
export class CarILikeComponent implements OnInit {

  carItems: Array<Car> = new Array<Car>();
  allCarListItems: Array<Car> = new Array<Car>();
  isDataLoading: boolean;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.carsService.getAllCars().subscribe(
      res => {
        this.allCarListItems = res;
        this.getFavoriteCars();
        this.carItems = this.getFavoriteCars();
        this.isDataLoading = false;
      },
      err => console.log(err)
    );
  }

  getFavoriteCars(): any {
    console.log(this.allCarListItems);
    return this.allCarListItems.filter(el => el.liked === true);
  }
}


