import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ByCategoryCarsComponent } from '../by-category-cars/by-category-cars.component';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
