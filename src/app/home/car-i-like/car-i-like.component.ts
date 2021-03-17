import { Component, Input, OnInit } from '@angular/core';
import { SmCarCardInfo } from '../../shared-components/sm-card-car/sm-car-card-info';

@Component({
  selector: 'app-car-i-like',
  templateUrl: './car-i-like.component.html',
  styleUrls: ['./car-i-like.component.scss']
})
export class CarILikeComponent implements OnInit {

  carItems: Array<SmCarCardInfo> = [
    new SmCarCardInfo('Chevrolet','Camaro Z/28', './assets/images/z28-camaro.jpg', 'Camaro Z/28'),
    new SmCarCardInfo('Pagani', 'Huayra BC', './assets/images/pagani-huayra.jpg', 'Huayra BC'),
    new SmCarCardInfo('P1', 'Mclaren1', './assets/images/mclaren-p1.jpg', 'Mclaren1'),
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
