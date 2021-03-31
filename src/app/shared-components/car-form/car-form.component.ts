import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from  '../../shared/servises/cars.service';
import {  } from '../../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onClose(){

  }

  onSeve(){
    
  }
}
