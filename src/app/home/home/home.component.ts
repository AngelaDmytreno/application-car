import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { DealersService } from '../../shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';
import { MyDealersComponent } from '../my-dealers/my-dealers.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  

  // @Output() newDealer = new EventEmitter<Dealers>();
  // @ContentChild(MyDealersComponent)
  // private myDealer: MyDealersComponent;

  passData: Dealers;
  newDealersList: Array<Dealers> = new Array<Dealers>();
  

  constructor(public dealersService: DealersService, public popUp: MatDialog) { 
  }

  ngOnInit(): void {
    // console.log(newDealersList);
  }

  openPopUp(): void {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      this.passData = result.data;
      this.dealersService.insertDealers(this.passData).subscribe();
      this.newDealersList.push(this.passData);
      console.log('pss', this.passData);
      // this.newDealer.emit(this.passData);
      // this.myDealer.addNewDealer(this.passData);
    });
  }
}
