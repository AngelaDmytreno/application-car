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
    new MenuItem('Home', 'home', true, '', 'Home label'),
    new MenuItem('Cars', 'directions_car', false, 'cars', 'Cars label'),
    new MenuItem('Dealers', 'stars', false, 'dealers', 'Dealers label')
  ];

  constructor() { }
  ngOnInit(): void { }

  onSelected(selectedMenuItem: MenuItem): void {
    this.menuItems.forEach((menuItem: MenuItem) => {
      if (menuItem.title === selectedMenuItem.title) {
        menuItem.isSelected = true;
      } else {
        menuItem.isSelected = false;
      }
    });
  }
}
