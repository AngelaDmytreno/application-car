import {Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Car } from '../../car';
import {  CarsService }  from '../../shared/servises/cars.service';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import { Location } from '@angular/common';
import { CarFormComponent } from '../car-form/car-form.component';
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
  
    selectedImagePath: string;

    


    constructor(
      private route: ActivatedRoute,
      private carsService: CarsService,
      public dialog: MatDialog,
      private router: Router,
      private location: Location,
      private formBuilder: FormBuilder,
      public dealerService: DealersService

      
    ) {
    }
    
    ngOnInit() {
      this.isDataLoading = true;
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) =>  {
            this.id = params.get('id');
            return this.carsService.getCarById(params.get('id')).
            pipe(finalize(()=> (this.isDataLoading = false)));
          }
          )
        ).subscribe((p) => {
          this.car = p;
          this.formBuild();
          
        });
    }
    ngOnChanges(changes: SimpleChanges): void {}

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





   changePage():void{
   this.router.navigate(['/cars']);
   }  

   onEdit(): void {
    this.location.replaceState(`/cars/${this.id}/edit`);
    this.isEdit = true;
   }
   

   goBack(){
    this.router.navigate([`/cars`]);
   }
}
