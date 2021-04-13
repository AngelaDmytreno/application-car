import { Component, OnInit, Inject, Injector, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../shared/servises/cars.service';
import { Car, initCar } from '../../car';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers, initDealer } from '../../dealers'
import { from, Observable } from 'rxjs';
import { debounceTime, takeWhile, tap } from 'rxjs/operators';



@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit, OnDestroy {

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
  dealers$: Observable<Array<Dealers>>;
  isAlive: boolean = true;


  @Output() saveCarData: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() cancelCar: EventEmitter<any> = new EventEmitter();

  @Input() carItem: Car = null;

  constructor(
    public carService: CarsService,
    private formBuilder: FormBuilder,
    public dealerService: DealersService
  ) {}

  ngOnInit(): void {
    this.carService.getAllCars()
    .pipe(takeWhile(() => (this.isAlive = true)))
    .subscribe(
      (res) => {
        this.carsList = res;
      },
      err => console.log(err)
    );

    this.getAllDealers();

    this.formBuild(this.carItem);
    this.myForm.controls.dealer.valueChanges.pipe(
      takeWhile(() => this.isAlive), debounceTime(400),
      tap((value) => {
        this.showError = value && this.dealers && !this.dealers.find((el) => el.name.toLowerCase() === value.toString().toLowerCase());

      })).subscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

 
  getAllDealers(): void {
    this.dealers$ = this.dealerService.getAllDealers().pipe(tap((dealers: Array<Dealers>) => {
      this.dealers = dealers;
      this.carItem && this.myForm.controls.dealer.setValue(this.getBrandName(this.carItem.brand));
     
    }))
  }
  formBuild(carItem: Car): void {
    this.myForm = this.formBuilder.group(
      {
        model: [this.carItem ? this.carItem.model : null, [Validators.required]],
        dealer: [this.carItem ? this.carItem.brand : null, [Validators.required]],
        class: [this.carItem ? this.carItem.class : null],
        year: [this.carItem ? this.carItem.year : null],
        color: [this.carItem ? this.carItem.color : null],
        wikilink: [this.carItem ? this.carItem.wikilink : null, [Validators.pattern(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)]], //Validators.pattern()
        description: [this.carItem ? this.carItem.description : null],
        image: [this.carItem ? this.carItem.image : null],
      }
    );

  }

  getBrandName(brand: string): string {
   
    if (brand === null || this.dealers=== undefined) {
      return "";
    }

    const dealer = this.dealers.find((dealer: Dealers) => dealer.id === brand);
    if (dealer) {
      return dealer.name;
    } else {
      return "";
    }
  }

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
    let unicId: string;
    this.carsList.forEach((el) => {
      if (el.id !== this.randomNumber()) {
        unicId = this.randomNumber();
      }
      else {
        this.randomNumber();
      }
    })
    return unicId;
  }

  onSave(): void {
    const selectedDealer = this.dealers.find((el) => el.name.toLowerCase() === (this.myForm.value.dealer || '').toLowerCase()
    );
    const updatedCar = {
      ...this.myForm.getRawValue(),
      brand: selectedDealer ? selectedDealer.name.toUpperCase() : null,
      id: this.carItem ? this.carItem.id : this.unicId(),
      newItem: this.carItem ? this.carItem.newItem : true,
      registration: this.carItem ? this.carItem.registration : new Date(),
    };
    this.saveCarData.emit(updatedCar);
  }


}
