import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.scss']
})
export class MycarsComponent implements OnInit {
  
  @Input('new-cars') newCars: Array<Car>;

  constructor() { }

  ngOnInit(): void {}

}
