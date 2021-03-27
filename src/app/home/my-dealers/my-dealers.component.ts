import { Component, Input, OnInit } from '@angular/core';
import { Dealers } from 'src/app/dealers';


@Component({
  selector: 'app-my-dealers',
  templateUrl: './my-dealers.component.html',
  styleUrls: ['./my-dealers.component.scss']
})
export class MyDealersComponent implements OnInit {

  newDealersList: Array<Dealers> = new Array<Dealers>();

  @Input('new-dealers') newDealers: Array<Dealers>;

  constructor() { }

  ngOnInit(): void {}

  addNewDealer(dealer: Dealers): void {
    this.newDealersList.push(dealer);
    console.log(this.newDealersList);
  }
}
