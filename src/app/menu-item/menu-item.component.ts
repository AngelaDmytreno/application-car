import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input('menu-item') menuItem: MenuItem;

  visibility: any;
  lineStyleVisible: any = { 'line-visible': true };
  lineStyleUnVisible: any = { 'line-unvisible': true };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((e: RouterEvent) => {
      if (e.url) {
        if (e.url === this.menuItem.url || (e.url === '/' && this.menuItem.url === '/home')) {
          this.visibility = this.lineStyleVisible;
        } else if (e.url !== this.menuItem.url) {
          this.visibility = this.lineStyleUnVisible;
        }
      }
    });
  }
}
