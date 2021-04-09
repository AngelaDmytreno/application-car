import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DealersService } from '../../shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from "../../shared-components/confirmation-dialog/confirmation-dialog.component";
import { CarsService } from 'src/app/shared/servises/cars.service';
import { Car } from 'src/app/car';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  allDealersList: Array<Dealers>;
  dataSource: any;
  displayedColumns: string[] = ['name', 'amountOfCars', 'headquarters', 'country', 'foundedIn', 'edit'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  createDealer: Dealers;
  valueFilter: string = '';
  isDataLoading: boolean;
  carsList: Array<Car>;
  isAlive: boolean;

  constructor(public dealersService: DealersService, public popUp: MatDialog, public dialog: MatDialog, public carService: CarsService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.dealersService.getAllDealers()
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe(
      res => {
        this.allDealersList = res;
        this.dataSource = new MatTableDataSource(this.allDealersList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isDataLoading = false;
        this.tableUpdate();
      },
      err => console.log(err)
    );
  }
  

  ngOnDestroy(): void {
    this.isAlive = false;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPopUp(obj = null) {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
      data: obj,
    });
    dialogRef.afterClosed()
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe((result) => {
      this.createDealer = result.data;
      if (result.data.newRecord === true) {
        this.dealersService.insertDealers(this.createDealer)
        .pipe(takeWhile(()=>(this.isAlive = true)))
        .subscribe();
      } else if (result.data.newRecord === false) {
        this.dealersService.updateDealers(this.createDealer)
        .pipe(takeWhile(()=>(this.isAlive = true)))
        .subscribe();
      }
      this.tableUpdate();
    });
  }


  tableUpdate(): void {
    this.dealersService.getAllDealers()
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe(
      res => {
        this.allDealersList = res;
        this.dataSource = new MatTableDataSource(this.allDealersList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => console.log(err)
    );
  }

  delete(dealer: Dealers): void {
    const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete?',
        message: 'Are you shure you want to delite this item: ' + dealer.name,
      }
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.dealersService.deleteDealer(dealer)
        .pipe(takeWhile(()=>(this.isAlive = true)))
        .subscribe();
        this.tableUpdate(); 
      }
    })

  }

  openDialog(elemnt: Dealers): void {
    let dealer = elemnt;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed()
    .pipe(takeWhile(()=>(this.isAlive = true)))
    .subscribe(result => {
      if (result) {
        console.log('Yes clicked');
      }
    });
  }
}


