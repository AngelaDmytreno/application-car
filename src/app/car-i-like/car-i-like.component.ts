import { Component, Input, OnInit } from '@angular/core';
import { SmCarCardInfo } from '../sm-card-car/sm-car-card-info';

@Component({
  selector: 'app-car-i-like',
  templateUrl: './car-i-like.component.html',
  styleUrls: ['./car-i-like.component.scss']
})
export class CarILikeComponent implements OnInit {

  carItems: Array<SmCarCardInfo> = [
    new SmCarCardInfo('P1', 'Mclaren', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new SmCarCardInfo('P2', 'Mclaren2', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new SmCarCardInfo('P3', 'Mclaren3', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
