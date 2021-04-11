import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Car } from 'src/app/car';
import { CarFormComponent } from '../car-form/car-form.component';
import { CarsService } from '../../shared/servises/cars.service';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-car-form',
  templateUrl: './dialog-car-form.component.html',
  styleUrls: ['./dialog-car-form.component.scss']
})
export class DialogCarFormComponent implements OnInit {


  cars: Array<Car>;
  isAlive: boolean;


  constructor(private popUp: MatDialogRef<DialogCarFormComponent>,
    private carsService: CarsService, private dealerService: DealersService) { 
      popUp.disableClose = true;
    }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }

  saveCarData(data: Car): void {

    const newCar: Car = {
      ...data,
    };

    this.popUp.close({ event: 'close', data: newCar })

    this.carsService.insertCar(data).subscribe(() => {
      this.dealerService.getDealerById(newCar.brand)
        .pipe(takeWhile(() => (this.isAlive = true)))
        .subscribe((dealer: Dealers) => {
          this.dealerService.updateDealers({
            ...dealer,
            amountOfCars: dealer.amountOfCars + 1,
          }).subscribe();
        });
    });
  }

  onClose(): void {
    this.popUp.close();
  }

}
