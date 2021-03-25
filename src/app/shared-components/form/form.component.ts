import { Component, OnInit, Inject } from '@angular/core';
import { DealersService } from '../../shared/servises/dealers.service';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Dealers, initDealer } from '../../dealers';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  model: Dealers;
  action:boolean ;
  localData: any;
  
constructor(private popUp: MatDialogRef < FormComponent >, @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit(): void {
  this.model = initDealer();
  this.action = !!this.data;
  this.localData = this.data ? { ...this.data } : initDealer();
};

onClose(): void {
  this.popUp.close();
};



onSave(): void {
  console.log('save');
  this.popUp.close({ event: this.action, data: this.localData });
};
  
}
