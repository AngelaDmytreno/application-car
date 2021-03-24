import { Component, OnInit, Inject } from '@angular/core';
import { DealersService } from '../../shared/servises/dealers.service';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  idNameFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }
  close(): void {
    this.dialogRef.close();
  }
  
}
