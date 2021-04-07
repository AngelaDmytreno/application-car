import { Component, OnInit, Inject, Injector, Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../shared/servises/cars.service';
import { Car, initCar } from '../../car';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers, initDealer } from '../../dealers'
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  selectedValue: string;
  showError: boolean = false;
  dealerChange$: Observable<any>;
  selectedImagePath: string;

  @Input() carItem: Car;

  
 

  // constructor(
  //   public carService: CarsService, private popUp: MatDialogRef<CarFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dealerService: DealersService
  //   ) {
  //   popUp.disableClose = true;
  // }

  private popUp = null;
  private data;
  constructor(
    private injector: Injector,
    public carService: CarsService,
    private formBuilder: FormBuilder,
    public dealerService: DealersService
  ) {
    this.popUp = this.injector.get(MatDialogRef, null);
    this.data = this.injector.get(MAT_DIALOG_DATA, null);
  }

  ngOnInit(): void {
    console.log('inittest');
    this.carService.getAllCars().subscribe(
      (res) => {
        this.carsList = res;
      },
      err => console.log(err)
    );

    this.dealerService.getAllDealers().subscribe((re) => {
      this.dealers = re;

    },
      err => console.log(err)
    );

    this.formBuild();
    this.myForm.controls.dealer.valueChanges.pipe(tap((value) => {
      this.showError = value && this.dealers && !this.dealers.find((el) => el.name.toLowerCase() === value.toString().toLowerCase());

    })).subscribe();
  }


  formBuild(): void {
    this.myForm = this.formBuilder.group(
      {

        model: [this.carItem ? this.carItem.model : null, [Validators.required]],
        dealer: [this.carItem ? this.carItem.brand : null, [Validators.required]],
        class: [this.carItem ? this.carItem.class :null],
        year: [this.carItem ? this.carItem.year : null],
        color: [this.carItem ? this.carItem.color : null],
        wikilink: [this.carItem ? this.carItem.wikilink : null, [Validators.pattern(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)]], //Validators.pattern()
        description: [this.carItem ? this.carItem.description :null],
        image: [this.carItem ? this.carItem.image : null],
      }
    );

  }

  
  onClose(): void {
    this.popUp.close();
  };

  selectDealer(dealerOption: any): void {
    this.myForm.controls.dealer.setValue(dealerOption.option.value.name);
  }

  randomNumber(): string {
    let result = '';
    let words = '0123456789';
    let max_position = words.length - 1;
    for (let i = 0; i < 10; ++i) {
      let position = Math.floor(Math.random() * max_position);
      result = result + words.substring(position, position + 1);
    }
    return result;
  }

  unicId(): string {
    let unicId: string ='';
    // if (this.car.id != this.randomNumber()) {// сравнить с массивом  carItem 
    //   unicId = this.randomNumber();
    // } else {
    //   this.randomNumber();
    // }
    console.log(unicId);
    return unicId;
  }

  onSave():void {
    console.log('save');
    const selectedDealer = this.dealers.find((el) => el.name.toLowerCase() === this.myForm.value.dealer.toLowerCase()
    );
    console.log(this.myForm.value.dealer);


    const updatedCar = {
      ...this.myForm.value,

      id: this.unicId(),
      brand: selectedDealer.id,
      newItem: this.action ? true : false,
      registration: this.action ? this.car.registration : new Date(),
     
    };
    this.popUp.close({
      event: 'close',
      data: updatedCar,
    });
    console.log(updatedCar);
  }


}
