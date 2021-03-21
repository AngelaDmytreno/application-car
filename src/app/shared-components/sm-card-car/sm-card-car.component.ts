import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-sm-card-car',
  templateUrl: './sm-card-car.component.html',
  styleUrls: ['./sm-card-car.component.scss']
})
export class SmCardCarComponent implements OnInit {

  @Input('car-item') carItem: Car;
  @Input('card-type') cardType: string;

  smCardStyleSize: any = { 'size-sm': true };
  lgCardStyleSize: any = { 'size-lg': true };
  
  smCardStyleTitle: any = { 'title-sm': true };
  lgCardStyleTitle: any = { 'title-lg': true };

  smCardStyleSubtittle: any = {'subtitle-sm': true};
  lgCardStyleSubtittle: any = {'subtitle-lg': true};
  
  cardStyleSize: any = this.smCardStyleSize;
  cardStyleTitle: any = this.smCardStyleTitle;
  cardStyleSubtitle: any = this.smCardStyleSubtittle;
  isCardLg: boolean = false;

  constructor() { }
  ngOnInit(): void { 
    if (this.cardType === 'lg') {
      this.isCardLg = true
      this.lgStyle();
    }
  }

  lgStyle(): void {
    this.cardStyleSize = this.lgCardStyleSize;
    this.cardStyleTitle = this.lgCardStyleTitle;
    this.cardStyleSubtitle = this.lgCardStyleSubtittle
  }

}
