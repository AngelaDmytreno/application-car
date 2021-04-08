import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Car } from '../../car';
import { CarsService } from '../../shared/servises/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Location } from '@angular/common';
import { CarFormComponent} from '../car-form/car-form.component';
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
      });
  }

  ngOnChanges(changes: SimpleChanges): void { }

  onEdit(): void {
    this.isEdit = true;
    this.router.navigate(['/cars', `${this.id}`, 'edit']);
  }

  saveCarData(data: Car): void {
    this.onSave(data);
  }

  onClose(): void {
    this.router.navigate(['/cars', `${this.id}`]);
  }


  onSave(data: Car): void {
    if (!data) {
      return
    }
   
    this.carsService.updateCars(data).subscribe(() => {
      this.car = data;
      this.router.navigate(['/cars', `${this.id}`]);
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
        this.changePage();
      }
    })
  }

  changePage(): void {
    this.router.navigate(['/cars']);
  }

}
