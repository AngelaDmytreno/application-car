import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/car';
import {MatButtonModule} from '@angular/material/button'; 
import { CarsService } from '../../shared/servises/cars.service'
 
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

  smCardStyleIcon: any = {'icon-sm': true};
  lgCardStyleIcon: any = {'icon-lg': true};


  smCardStyleImg: any = {'img-sm': true};
  lgCardStyleImg: any = {'img-lg': true};

  cardStyleSize: any = this.smCardStyleSize;
  cardStyleTitle: any = this.smCardStyleTitle;
  cardStyleSubtitle: any = this.smCardStyleSubtittle;
  cardStyleIcon: any = this.smCardStyleIcon;

  cardStyleImg: any = this.smCardStyleImg;
  isCardLg: boolean = false;
  // carLike: boolean = false;
addParameter:boolean=false;

  constructor( public carsService: CarsService) { }
  
  ngOnInit(): void { 
    if (this.cardType === 'lg') {
      this.isCardLg = true
      this.lgStyle();
    }
  }

  lgStyle(): void {
    this.cardStyleSize = this.lgCardStyleSize;
    this.cardStyleTitle = this.lgCardStyleTitle;
    this.cardStyleSubtitle = this.lgCardStyleSubtittle;
    this.cardStyleIcon = this.lgCardStyleIcon;
    this.cardStyleImg = this.lgCardStyleImg;
  }
  // toggleForm() {
  //   this.addParameter = !this.addParameter;
  //   this.carsService.updateCars(carItem).subscribe();
  //   console.log(carItem.liked);
  // }
   

  like(carItem: Car):void{
    this.carItem.liked = !this.carItem.liked;
    this.carsService.updateCars(this.carItem).subscribe();
    console.log(this.carItem.liked);
  }  

}
