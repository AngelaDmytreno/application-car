import { Component, OnInit, Input} from '@angular/core';
import { MdCarCardInfo } from '../md-car-card/md-car-card-info';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-md-car-card',
  templateUrl: './md-car-card.component.html',
  styleUrls: ['./md-car-card.component.scss']
})
export class MdCarCardComponent implements OnInit {

  @Input('md-car-item') carListItem: MdCarCardInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
