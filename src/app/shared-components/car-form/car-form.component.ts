import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../shared/servises/cars.service';
import { Car, initCar } from '../../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carsList: Array<Car>;
  car:Car;
  action:boolean;
  localData: any;

  constructor(public carService: CarsService, private popUp: MatDialogRef<CarFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    popUp.disableClose = true;
  }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(
      (res)=>{
        this.carsList = res;
      },
      err => console.log(err)
    );
    this.data ? (this.car = {  ...this.data }) && (this.action = true) : (this.car = initCar())
  }


  onClose(): void {
    this.popUp.close();
  };

  onSeve() {
    const updatedDealer = {
      ...this.car,
      id: this.car.model.toUpperCase(),
      newItem: this.action ? true : false,
    };
    this.popUp.close({
      event: 'close',
      data: updatedDealer,
      
    });

  }
}
