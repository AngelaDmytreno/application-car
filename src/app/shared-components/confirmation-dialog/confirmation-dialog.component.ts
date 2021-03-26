import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealersService } from '../../shared/servises/dealers.service';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dealersService: DealersService,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { 
      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDeletion():void {
    const deletDealer = {

      // this.dealersService.deleteDealer(dealer).subscribe();
      // this.tableUpdate();

    };
    console.log('test');
    this.dialogRef.close({
      event: 'close',
      data: deletDealer,
    });
  }
  
  ngOnInit(): void {

  }

  
}
