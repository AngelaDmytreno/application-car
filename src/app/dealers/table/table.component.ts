import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DealersService } from '../../shared/servises/dealers.service';
import { Dealers } from 'src/app/dealers';
import { FormComponent } from '../../shared-components/form/form.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dealersService: DealersService, public popUp: MatDialog,) { }

  ngOnInit(): void {
    // this.dealers.Service.insertDealers();
    this.dealersService.getAllDealers().subscribe(
      res => {
        this.allDealersList = res;
        this.dataSource = new MatTableDataSource(this.allDealersList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => console.log(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // openRow(row): void {
  //   console.log(row);
  // }

  openPopUp(obj = null) {
    const dialogRef = this.popUp.open(FormComponent, {
      width: '250px',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => (result.event === 'Add') ? this.addDealer(result.data) : this.chengeDealer(result.data));
  }

  addDealer(elem): void {
    ///add tring create
  }
  chengeDealer(elem): void {
    //заносит в бд chenge
  }

  tableUpdate(): void {
    this.dealersService.getAllDealers().subscribe(
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
    this.dealersService.deleteDealer(dealer).subscribe();
    this.tableUpdate();
  }

}


