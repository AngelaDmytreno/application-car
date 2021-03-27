import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  
  value = '';
  carListItems: Array<Car> = new Array<Car>();
  selectedCars: Array<Car> = new Array<Car>();
  loadCount: number = 8;
  searchCars: any;
  startIndex:any = 0; 
  endIndex: any = 8;

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

    console.log(this.searchCars);
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
  this.startIndex = this.endIndex;
  this.endIndex += 8;
  this.selectedCars.push(...this.carListItems.slice(this.startIndex, this.endIndex));

  }
  
  nullifyInput(): void {
    
  }

 
}
