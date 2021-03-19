import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ByCategoryCarsComponent } from '../by-category-cars/by-category-cars.component';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  viewByCategory: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
