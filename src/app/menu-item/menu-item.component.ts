import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input('menu-item') menuItem: MenuItem;

  visibility: boolean = false;
  isAlive: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(takeWhile(() => (this.isAlive = true)))
      .subscribe((e: RouterEvent) => {
        if (e.url) {
          this.visibility = !!(e.url === this.menuItem.url || (e.url === '/' && this.menuItem.url === '/home'));
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
