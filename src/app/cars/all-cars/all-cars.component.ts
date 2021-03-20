import { Component, OnInit, Input} from '@angular/core';
import { MdCarCardInfo } from '../md-car-card/md-car-card-info';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  carListItems: Array<Car> = new Array<Car>();
  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(
      res => { 
        this.carListItems = res;
        console.log(this.carListItems);
        
      },
      err => console.log(err)
    );
  }
  // disLike(car: Car):void{
  //   car.liked = !car.liked;
  //   this.carsService.updateCar(car).subscribe();
  // }

  // like(car: Car):void{
  //   car.liked = car.liked;
  //   this.carsService.updateCar(car).subscribe();
  // }
 

}
