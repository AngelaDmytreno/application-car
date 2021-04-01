import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../shared/servises/cars.service';
import { Car, initCar } from '../../car';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers, initDealer } from '../../dealers'
import { from } from 'rxjs';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carsList: Array<Car>;
  car: Car;
  dealers: Array<Dealers>;
  dealer: Dealers;
  action: boolean;
  localData: any;
  myForm: FormGroup;

  constructor(public carService: CarsService, private popUp: MatDialogRef<CarFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dealerService: DealersService) {
    popUp.disableClose = true;
  }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(
      (res) => {
        this.carsList = res;
      },
      err => console.log(err)
    );

    this.dealerService.getAllDealers().subscribe((re) => {
      this.dealers = re;
      console.log('dealers',this.dealers);
    },
      err => console.log(err)
    );
    

    this.data ? (this.car = { ...this.data }) && (this.action = true) : (this.car = initCar());
    this.myForm = this.formBuilder.group(
      {
        model: [null, Validators.required],
        dealer: [null, Validators.required],
        class: [null],
        year: [null],
        color: [null],
        wikilink: [null],
        description: [null],
        image: [null],

      }
    );
  }


  onClose(): void {
    this.popUp.close();
  };
  unicId(): any{
    return 
  }
  onSeve() {
    const updatedDealer = {
      ...this.car,
      id: this.unicId(),//уникальное число  проверка на уникальность, this.dealers: 
      brand: this.dealer.id,
      newItem: this.action ? true : false,
      registration: this.action ? this.car.registration : new Date()
    };
    this.popUp.close({
      event: 'close',
      data: updatedDealer,
    });

  }

  uploadFileEvt($event): void {
    console.log($event);
  }
}
