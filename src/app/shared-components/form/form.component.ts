import { Component, OnInit, Inject } from '@angular/core';
import { DealersService } from '../../shared/servises/dealers.service';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Dealers }  from '../../dealers';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 controls = new FormControl('', [Validators.required, Validators.minLength(3)]);

model: Dealers = new Dealers('cvb','cvb', null, 'xcv', 2, null, 'xcvb');

  constructor(private popUp: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

  close(): void {
    this.popUp.close();
  }
  
}
