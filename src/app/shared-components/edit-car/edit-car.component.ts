import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CarFormComponent } from '../car-form/car-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../shared/servises/cars.service';
import { Car, initCar } from '../../car';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { DealersService } from 'src/app/shared/servises/dealers.service';
import { Dealers, initDealer } from '../../dealers'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  car: Car;
  isDataLoading: boolean = true;
  id: string;
  carsList: Array<Car>;
  dealers: Array<Dealers>;
  dealer: Dealers;
  action: boolean;
  localData: any;
  myForm: FormGroup;
  selectedValue: string;
  showError: boolean = false;
  dealerChange$: Observable<any>;
  selectedImagePath: string;


  constructor(private route: ActivatedRoute,
    private carsService: CarsService,
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder,
    public dealerService: DealersService
  ) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = params.get('id');
          return this.carsService.getCarById(params.get('id')).
            pipe(finalize(() => (this.isDataLoading = false)));
        }
        )
      ).subscribe((p) => {
        this.car = p;
        this.formBuild();
        this.myForm.controls.dealer.valueChanges.pipe(tap((value) => {
          this.showError = value && this.dealers && !this.dealers.find((el) => el.name.toLowerCase() === value.toString().toLowerCase());

        })).subscribe();
      });

    this.carsService.getAllCars().subscribe(
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

  }

  formBuild(): void {
    this.myForm = this.formBuilder.group(
      {
        id: [this.car.id],
        model: [this.car.model, [Validators.required]],
        dealer: [this.car.brand, [Validators.required]],
        class: [this.car.class],
        year: [this.car.year],
        color: [this.car.color],
        wikilink: [this.car.wikilink, [Validators.pattern(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)]], //Validators.pattern()
        description: [this.car.description],
        image: [this.car.image],
      }
    );

  }
  onClose(): void {
    this.router.navigate([`/cars/${this.id}`]);
  }
  onSeve(): void {
    const updatedCar: Car = this.myForm.value;
    this.carsService.updateCars(updatedCar).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.onClose();
  }

  selectDealer(dealerOption: any): void {
    this.myForm.controls.dealer.setValue(dealerOption.option.value.name);
  }
}
