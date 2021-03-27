import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  
  valueFilter:string = '';
  carListItems: Array<Car> = new Array<Car>();
  selectedCars: Array<Car> = new Array<Car>();
  loadCount: number = 8;
  searchCars: any;
  startCard:any = 0; 
  endCard: any = 8;

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
    setTimeout(() =>
      this.filterCars(event.target.value), 2000);
  }

  filterCars(param): void {
    console.log(param);
    this.searchCars = this.carListItems.filter(el => this.isModel(el.model, param) || this.isBrand(el.brand, param) || param === '');
    this.selectedCars = this.searchCars;
  }

  isModel(model: string, params: string): boolean {
    const re = new RegExp(`^${params.toLocaleLowerCase()}`);
    if (model.toLocaleLowerCase().match(re)) {
      return true;
    } else {
      return false;
    }
  }

  isBrand(brand: string, params: string): boolean {
    const re = new RegExp(`${params.toLocaleLowerCase()}`);
    if (brand.toLocaleLowerCase().match(re)) {
      return true;
    } else {
      return false;
    }
  }

  loadMore(): void {
  this.startCard = this.endCard;
  this.endCard += 8;
  this.selectedCars.push(...this.carListItems.slice(this.startCard, this.endCard));
  }

}
