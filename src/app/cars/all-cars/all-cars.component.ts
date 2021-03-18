import { Component, OnInit, Input} from '@angular/core';
import { MdCarCardInfo } from '../md-car-card/md-car-card-info';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {

  carListItems: Array<MdCarCardInfo> = [
    new MdCarCardInfo('Chevrolet','Camaro Z/28', './assets/images/z28-camaro.jpg', 'Camaro Z/28'),
    new MdCarCardInfo('Pagani', 'Huayra BC', './assets/images/pagani-huayra.jpg', 'Huayra BC'),
    new MdCarCardInfo('P1', 'Mclaren1', './assets/images/mclaren-p1.jpg', 'Mclaren1'),
    new MdCarCardInfo('Toyota', 'Celica', './assets/images/toyota-celica.jpg', 'Celica'),
    new MdCarCardInfo('Ford', 'GT', './assets/images/ford-gt.jpg', 'GT'),
    new MdCarCardInfo('Audi', 'A6', './assets/images/audi-a6.jpg', 'A6'),
    new MdCarCardInfo('Jeep', 'Wrangler', './assets/images/jeep-wrangler.jpg', 'Wrangler'),
    new MdCarCardInfo('Toyota', 'FJ Cruiser', './assets/images/toyota-fj-cruiser.jpg', 'FJ Cruiser'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
