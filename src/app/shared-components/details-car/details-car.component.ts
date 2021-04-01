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
import {  CarsService }  from '../../shared/servises/cars.service'

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss']
})
export class DetailsCarComponent implements OnInit, OnChanges {
    car: Car;
    constructor(
      private route: ActivatedRoute,
      private carsService: CarsService
    ) {}
    // tslint:disable-next-line:typedef
    ngOnInit() {
      // this.getCarById();
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) =>
            this.carsService.getCarById(params.get('id'))
          )
        )
        .subscribe((p) => {
          this.car = p;
        });
    }
    ngOnChanges(changes: SimpleChanges): void {}

}
