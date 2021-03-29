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

  createDealer: Dealers;
  newDealersList: Array<Dealers> = new Array<Dealers>();
  
  constructor(public dealersService: DealersService, public popUp: MatDialog) {}

  ngOnInit(): void {
    this.dealersService.getAllDealers().subscribe((dealers)=>{
      this.newDealersList = dealers.filter((dealer) => dealer.registration);
    })
  }

  openPopUp(): void {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      this.createDealer = result.data;
      this.dealersService.insertDealers(this.createDealer).subscribe();
      this.newDealersList.push(this.createDealer);
      this.dealersService.postDealers(this.createDealer);
    });
  }
}
