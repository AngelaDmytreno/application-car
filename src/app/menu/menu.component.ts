import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Array<MenuItem> = [
    new MenuItem('Home', 'home', true, ''),
    new MenuItem('Cars', 'directions_car', false, 'cars'),
    new MenuItem('Dealers', 'stars', false, 'dealers')
  ];

  constructor() { }
  ngOnInit(): void { }

  onSelected(title: string): void {
    this.menuItems.forEach((menuItem: MenuItem) => {
      if (menuItem.title === title) {
        menuItem.isSelected = true;
      } else {
        menuItem.isSelected = false;
      }
    });
  }
}
