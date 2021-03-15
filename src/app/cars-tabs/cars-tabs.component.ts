import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-cars-tabs',
  templateUrl: './cars-tabs.component.html',
  styleUrls: ['./cars-tabs.component.scss']
})
export class CarsTabsComponent implements OnInit {

  @Input('categories') categories: Array<string>;
  activeLink: string;
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
    this.activeLink = this.categories[0];
  }
}
