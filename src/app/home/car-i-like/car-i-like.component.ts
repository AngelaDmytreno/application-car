import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-car-i-like',
  templateUrl: './car-i-like.component.html',
  styleUrls: ['./car-i-like.component.scss']
})
export class CarILikeComponent implements OnInit {

  carItems: Array<Car> = [
    new Car('8730522046', 'Porsche', 'Boxster S', 1987, 'blue', 'sport','roadster','./assets/images/porsche-boxter.jpg', false, false)
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
