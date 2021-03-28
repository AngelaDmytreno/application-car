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
  
constructor(public dealersService: DealersService, private popUp: MatDialogRef < FormComponent >, @Inject(MAT_DIALOG_DATA) public data: any) {
  popUp.disableClose = true;
 }

ngOnInit(): void {
  this.dealer = initDealer();
  this.action = !!this.data;
  this.localData = this.data ? { ...this.data } : initDealer();
  this.dealersService.getAllDealers().subscribe(
    (res) => {
      this.dealersList = res;
    },
    err => console.log(err)
  );
  this.data ? (this.dealer = {  ...this.data }) && (this.action = true) : (this.dealer = initDealer())
};

onClose(): void {
  this.popUp.close({ event: this.action, data: this.localData });
};

checkId():void {
   if(this.dealersList.find((elem) =>  elem.id === this.dealer.id.toUpperCase())){
    this.showError = true;
   }
}

onSeve(): void {
  const updatedDealer = {
    ...this.dealer,
    id: this.dealer.id.toUpperCase(),
    newRecord: true,
    registration: this.action ? this.dealer.registration : new Date(),
  };
  this.popUp.close({
    event: 'close',
    data: updatedDealer,
    
  });
}
}
