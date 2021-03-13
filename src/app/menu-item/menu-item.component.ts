import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  // @Input('aria-label') ariaLabel: string; // Спросить у Нади?
  @Input('icon') icon: string;
  @Input('title') title: string;
  @Input('is-selected') set isSelected(value: boolean) {
    if (value) {
      this.visibility = this.lineStyleVisible;
    } else {
      this.visibility = this.lineStyleUnVisible;
    }
  };
  @Output() selected = new EventEmitter<string>();

  visibility: any;
  lineStyleVisible: any = { 'line-visible': true };
  lineStyleUnVisible: any = { 'line-unvisible': true };

  constructor() { }
  ngOnInit(): void { 
    if (this.isSelected) {
      this.visibility = this.lineStyleUnVisible;
    }
  }

  onClick(): void {
    this.selected.emit(this.title);
  }
}
