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
import { Car } from '../../car';
import {  CarsService }  from '../../shared/servises/cars.service';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss']
})
export class DetailsCarComponent implements OnInit, OnChanges {

    car: Car;
    isDataLoading: boolean = true;
    id: string

    constructor(
      private route: ActivatedRoute,
      private carsService: CarsService,
      public dialog: MatDialog,
      private router: Router
    ) {}
    
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

   changePage():void{
   this.router.navigate(['/cars']);
   }  

   onEdit(): void {
    this.router.navigate([`/cars/${this.id}/edit`]);
   }

}
