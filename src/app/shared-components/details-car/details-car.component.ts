import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
    constructor(
      private route: ActivatedRoute,
      private carsService: CarsService,
      public dialog: MatDialog
    ) {}
    
    ngOnInit() {
      // this.isDataLoading = true;
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) =>
            this.carsService.getCarById(params.get('id'))
          )
        )
        .subscribe((p) => {
          this.car = p;
        });
        this.isDataLoading = false;
    }
    ngOnChanges(changes: SimpleChanges): void {}

    delete(): void {
      const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title: 'Delete?',
          message: 'Are you shure you want to delite this item: ' + this.car.model,
        }
      });
      confirmDialog.afterClosed().subscribe((result) => {
       
      })
  
    }

}
