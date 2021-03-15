import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input('menu-item') menuItem: MenuItem;
  @Input('is-selected') set isSelected(value: boolean) {
    if (value) {
      this.visibility = this.lineStyleVisible;
    } else {
      this.visibility = this.lineStyleUnVisible;
    }
  };
  @Output() selected = new EventEmitter<MenuItem>();

  visibility: any; // TODO: Спросить у Нади, нужно ли такое типизировать и как?
  lineStyleVisible: any = { 'line-visible': true }; // TODO: Спросить у Нади, нужно ли такое типизировать и как?
  lineStyleUnVisible: any = { 'line-unvisible': true }; // TODO: Спросить у Нади, нужно ли такое типизировать и как?

  constructor(private router: Router) { }

  ngOnInit(): void { 
    if (this.menuItem.isSelected) {
      this.visibility = this.lineStyleVisible;
    }
  }

  onNavigate(): void {
    this.selected.emit(this.menuItem);
    this.router.navigate([this.menuItem.path]);
  }
}
