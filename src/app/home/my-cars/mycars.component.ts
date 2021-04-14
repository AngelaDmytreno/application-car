import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/car';
import { Dealers } from 'src/app/dealers';
import { CarFormComponent } from 'src/app/shared-components/car-form/car-form.component';
import { CarsService } from 'src/app/shared/servises/cars.service';
import { DealersService } from 'src/app/shared/servises/dealers.service';

@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.scss']
})
export class MycarsComponent implements OnInit {
  
  @Input('new-cars') newCars: Array<Car>;
  @Input() isLoadingCar: boolean;

  dealersList: Array<Dealers>;

  constructor(private dealersService: DealersService) { }

  ngOnInit(): void {
   this.dealersService.getAllDealers().subscribe((res)=>{
     this.dealersList = res;
   });
  }

  getBrandName(brand: string): string {
    const dealer = this.dealersList.find((dealer: Dealers) => dealer.name === brand);
    if (dealer) {
      return dealer.name;
    } else {
      return 'trololo';
    }
  }

}
