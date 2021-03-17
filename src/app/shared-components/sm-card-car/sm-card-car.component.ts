import { Component, OnInit, Input } from '@angular/core';
import { SmCarCardInfo } from './sm-car-card-info';

@Component({
  selector: 'app-sm-card-car',
  templateUrl: './sm-card-car.component.html',
  styleUrls: ['./sm-card-car.component.scss']
})
export class SmCardCarComponent implements OnInit {

  @Input('car-item') carItem: SmCarCardInfo;

  constructor() { }
  ngOnInit(): void { }
}
