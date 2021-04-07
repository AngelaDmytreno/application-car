import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Car } from '../../car';
import { CarsService } from '../../shared/servises/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Location } from '@angular/common';
import { CarFormComponent, FormDataOutput } from '../car-form/car-form.component';
import { tap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Dealers } from 'src/app/dealers';
import { DealersService } from 'src/app/shared/servises/dealers.service';


@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss']
})
export class DetailsCarComponent implements OnInit, OnChanges {


  car: Car;
  isDataLoading: boolean = true;
  id: string;
  isEdit: boolean = false;

  myForm: FormGroup;
  dealers: Array<Dealers>;
  showError: boolean = false;
  carsList: Array<Car>;

  dealer: Dealers;
  action: boolean;
  localData: any;
  selectedValue: string;



  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    public dialog: MatDialog,
    private router: Router,
    // private location: Location,
    // private formBuilder: FormBuilder,
    public dealerService: DealersService
  ) {
  }

  ngOnInit() {

    this.isDataLoading = true;
    this.route.data.subscribe((res) => {
      this.isEdit = res.isEdit;
    })
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
        console.log(this.car);
      });
  }



  ngOnChanges(changes: SimpleChanges): void { }

  onEdit(): void {
    console.log('edit');
    this.isEdit = true;
    this.router.navigate(['/cars', `${this.id}`, 'edit']);
  }


  formData(data: FormDataOutput): void {
    console.log('data', data);
    if (!data) {
      return;
    }
    if (data.action === 'save') {
      this.onSave(data.data);
    }
    else if (data.action === 'cancel') {
      this.onClose();
    }
  }

  onClose(): void {
    this.router.navigate(['/cars', `${this.id}`]);
  }


  onSave(data: Car): void {
    if (!data) {
      return
    }
    console.log("trololo");

    this.carsService.updateCars(data).subscribe(() => {
      this.car = data;
      this.router.navigate(['/cars', `${this.id}`]);
      console.log(this.car);
    });
  }

  delete(car: Car): void {
    const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete?',
        message: 'Are you shure you want to delite this item: ' + this.car.model,
      }
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.carsService.deleteCarById(car).subscribe();
        // this.carsService.getAllCars();
        this.changePage();
      }

    })

  }







  changePage(): void {
    this.router.navigate(['/cars']);
  }

  //  onEdit(): void {
  //   this.isEdit = true;
  //   this.router.navigate(['/cars',`${this.id}`,'edit']);

  //  }


  goBack() {
    this.router.navigate([`/cars`]);
  }
}
