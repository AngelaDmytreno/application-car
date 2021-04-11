import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Array<MenuItem> = [
    new MenuItem('Home', 'home', true, '', 'Home label', '/home'),
    new MenuItem('Cars', 'directions_car', false, 'cars', 'Cars label', '/cars'),
    new MenuItem('Dealers', 'stars', false, 'dealers', 'Dealers label', '/dealers')
  ];

  currentUrl: string;

  constructor() { }
  ngOnInit(): void { }
}
