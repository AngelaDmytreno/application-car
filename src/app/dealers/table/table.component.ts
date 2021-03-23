import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DealersService } from '../../shared/servises/dealers.service'
import { Dealers } from 'src/app/dealers';
import {MatTableModule} from '@angular/material/table'; 




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent  implements  OnInit, AfterViewInit{

  allDealersList: Array<Dealers>;
  dataSource: any;
  displayedColumns: string[] = ['name', 'amountOfCars', 'headquarters', 'country', 'foundedIn', 'edit', 'delet'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dealersService: DealersService) {
    
  }

  ngOnInit(): void {
    // this.dealers.Service.insertDealers();
    this.dealersService.getAllDealers().subscribe(
      res => { 
        this.allDealersList = res;
        this.dataSource = new MatTableDataSource(this.allDealersList);
        this.dataSource.sort = this.sort;
        
      },
      err => console.log(err)
    );
    
  }
  ngAfterViewInit() {
    
  }


  
 



}

