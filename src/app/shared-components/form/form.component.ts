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
  
  dealer: Dealers;
  action:boolean;
  localData: any;
  showError: boolean = false;
  dealersList: Array<Dealers>;
  
constructor(public dealersService: DealersService, private popUp: MatDialogRef < FormComponent >, @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit(): void {
  this.dealer = initDealer();
  this.action = !!this.data;
  this.localData = this.data ? { ...this.data } : initDealer();
  this.dealersService.getAllDealers().subscribe(
    res => {
      this.dealersList = res;
    },
    err => console.log(err)
  );
};

onClose(): void {
  this.popUp.close({ event: this.action, data: this.localData });
  console.log('test');
};

onSave(): void {
  console.log('save');
  this.popUp.close({ event: this.action, data: this.localData });

};

checkId():void {
   if(this.dealersList.find((elem) =>  elem.id === this.dealer.id.toUpperCase())){
    this.showError = true;
   }
}
  
}
