import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Car } from 'src/app/car';
import { CarFormComponent, FormDataOutput} from '../car-form/car-form.component';
import { CarsService } from '../../shared/servises/cars.service';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';

@Component({
  selector: 'app-dialog-car-form',
  templateUrl: './dialog-car-form.component.html',
  styleUrls: ['./dialog-car-form.component.scss']
})
export class DialogCarFormComponent implements OnInit {
  

   cars: Array<Car>;
  
  constructor(private popUp: MatDialogRef<DialogCarFormComponent>, 
    private carsService: CarsService, private dealerService: DealersService) { }

  ngOnInit(): void {
    
  }

  formData(data: FormDataOutput): void{
    if (!data){
      return;
    }


    if(data.action === 'save'){
      this.onSave(data.data);
    }
    else if(data.action ==='cancel'){
      this.onClose();
    }
  }

  onSave(data: Car): void{
    console.log("trololo");
    const newCar: Car = {
      ...data,
    };
    
    this.popUp.close({event : 'close', data: newCar})

    if (!data) {
      return
    }
  

    this.carsService.insertCar(data).subscribe(() => {
      this.dealerService.getDealerById(newCar.brand).subscribe((dealer: Dealers) => {
        this.dealerService.updateDealers({
          ...dealer,
          amountOfCars: dealer.amountOfCars + 1,
        }).subscribe();
      });
    });
  }
   
  onClose(): void{
    this.popUp.close();
  }

}
