import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public popUp: MatDialog) { }

  ngOnInit(): void {
  }
  openPopUp(): void {
    this.popUp.open(FormComponent);
  }

}
