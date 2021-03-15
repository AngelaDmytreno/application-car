import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarILikeComponent } from './car-i-like/car-i-like.component';
import { MycarsComponent } from './my-cars/mycars.component';
import { MyDealersComponent } from './my-dealers/my-dealers.component';
import { MatButtonModule } from '@angular/material/button';
import { SmCardCarComponent } from './sm-card-car/sm-card-car.component';
import { MatCardModule } from '@angular/material/card';
import { DealersComponent } from './dealers/dealers.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CarsTabsComponent } from './cars-tabs/cars-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ByCategoryCarsComponent } from './by-category-cars/by-category-cars.component';
import { AllCarsComponent } from './all-cars/all-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    HomeComponent,
    CarsComponent,
    CarILikeComponent,
    MycarsComponent,
    MyDealersComponent,
    SmCardCarComponent,
    DealersComponent,
    SlideToggleComponent,
    CarsTabsComponent,
    ByCategoryCarsComponent,
    AllCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTabsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
