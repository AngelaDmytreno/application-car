import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { DealersService } from '../../shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  passData: Dealers;
  newDealersList: Array<Dealers> = new Array<Dealers>();
  

  constructor(public dealersService: DealersService, public popUp: MatDialog) { 
  }

  ngOnInit(): void {
  }

  openPopUp(): void {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      this.passData = result.data;
      this.dealersService.insertDealers(this.passData).subscribe();
      this.newDealersList.push(this.passData);
      console.log(this.newDealersList);
    });
  }

}
