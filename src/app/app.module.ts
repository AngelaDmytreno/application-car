import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SmCardCarComponent } from './shared-components/sm-card-car/sm-card-car.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MainComponent } from './main/main.component';
import { HomeModule } from './home/home.module';
import { DealersModule } from './dealers/dealers.module';
import { CarsModule } from './cars/cars.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    HomeModule,
    DealersModule,
    CarsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { apiBase: '/', delay: 200 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
