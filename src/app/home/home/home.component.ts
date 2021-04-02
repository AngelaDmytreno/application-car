import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { DealersService } from '../../shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';
import { MyDealersComponent } from '../my-dealers/my-dealers.component';
import { CarFormComponent } from '../../shared-components/car-form/car-form.component'
import { Car } from 'src/app/car';
import { CarsService } from 'src/app/shared/servises/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  createDealer: Dealers;
  newDealersList: Array<Dealers> = new Array<Dealers>();
  newCarList: Array<Car> = new Array<Car>();
  createCar: Car;

  
  constructor(public dealersService: DealersService, public popUp: MatDialog, public carService: CarsService) {}

  ngOnInit(): void {
    this.dealersService.getAllDealers().subscribe((dealers)=>{
      this.newDealersList = dealers.filter((dealer) => dealer.registration);
    })
  }

  openPopUp(): void {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.createDealer = result.data;
        this.dealersService.insertDealers(this.createDealer).subscribe();
        this.newDealersList.push(this.createDealer);
      }
    });
  }

  openPopUpCarForm(): void {
    const dialogRef = this.popUp.open(CarFormComponent, {
      width: '450px',
    
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.createCar = result.data;
        this.carService.insertCar(this.createCar).subscribe();
        this.newCarList.push(this.createCar);
      }
    });
  }
}
