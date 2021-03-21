import { Component, OnInit, Input} from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  carListItems: Array<Car> = new Array<Car>();
  selectedCars: Array<Car> = new Array<Car>();

  loadCount: number = 8;

  constructor(public carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(
      res => {
        this.carListItems = res;
        this.selectedCars = this.carListItems.slice(0, this.loadCount);
      },
      err => console.log(err)
    );
  }

  onKey(event: any) {
    setTimeout(() => this.filterCars(event.target.value), 2000);
  }

  filterCars(param): void {
    console.log(param);
    // this.selectedCars = 
  }

  loadMore(): void {
    this.loadCount = this.loadCount + 8;
    this.selectedCars = this.carListItems.slice(0, this.loadCount);
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
