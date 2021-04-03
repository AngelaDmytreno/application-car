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
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  car: Car;
  isDataLoading: boolean = true;
  id: string

  constructor(      private route: ActivatedRoute,
    private carsService: CarsService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
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

}
