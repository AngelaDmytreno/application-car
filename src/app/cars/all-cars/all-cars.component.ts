import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../shared/servises/cars.service';
import { Car } from '../../shared/entities/car.interface';
import { Dealers } from 'src/app/dealers';
import { DealersService } from 'src/app/shared/servises/dealers.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  
  valueFilter:string;
  carListItems: Array<Car> = new Array<Car>();
  selectedCars: Array<Car> = new Array<Car>();
  loadCount: number = 8;
  startCard: number = 0; 
  endCard: number = 8;
  isDataLoading: boolean;
  useFilter:boolean;
  dealersList:Array<Dealers>

  constructor(public carsService: CarsService, public dealerService: DealersService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.dealerService.getAllDealers().subscribe(
      (re)=>{
        this.dealersList = re;
      },err => console.log(err)

    )
    this.carsService.getAllCars().subscribe(
      res => {
        this.carListItems = res;
        this.selectedCars = this.carListItems.slice(0, this.loadCount);
        this.isDataLoading = false;
      },
      err => console.log(err)
    );
  }

  getBrandName(brand: string): string {
    const dealer = this.dealersList.find((dealer: Dealers) => dealer.id === brand);
    return dealer.name;
  }

  onKey(event: any) {
    setTimeout(() => this.filterCars(event.target.value), 2000);
  }

  filterCars(param): void {
    this.resetStartEnd();
    this.selectedCars = this.carListItems
      .filter(el => this.isModel(el.model, param) || this.isBrand(el.brand, param) || param === '')
      .slice(0, this.loadCount);
  }

  isModel(model: string, params: string): boolean {
    const re = new RegExp(`^${params.toLocaleLowerCase()}`);
    return model.toLocaleLowerCase().match(re) ? true : false;
  }

  isBrand(brand: string, params: string): boolean {
    const re = new RegExp(`${params.toLocaleLowerCase()}`);
    return brand.toLocaleLowerCase().match(re) ? true : false;
  }

  loadMore(): void {
      this.startCard = this.endCard;
      this.endCard += 8;
      this.selectedCars.push(...this.carListItems.slice(this.startCard, this.endCard));
  }

  isShowLoadButton(): boolean {
    return this.selectedCars.length >= 8 && this.selectedCars.length !== this.carListItems.length;
  }

  resetFilter(): void{
    this.resetStartEnd();
    this.valueFilter = '';
    this.selectedCars = this.carListItems.slice(0, this.loadCount);
  }

  resetStartEnd(): void {
    this.startCard = 0;
    this.endCard = 8;
  }
}
