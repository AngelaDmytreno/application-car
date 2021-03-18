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
import { CarsComponent } from './cars/cars.component';
import { MatButtonModule } from '@angular/material/button';
import { SmCardCarComponent } from './shared-components/sm-card-car/sm-card-car.component';
import { MatCardModule } from '@angular/material/card';

import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CarsTabsComponent } from './cars-tabs/cars-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ByCategoryCarsComponent } from './by-category-cars/by-category-cars.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { MdCarCardComponent } from './md-car-card/md-car-card.component';
import { MainComponent } from './main/main.component';
import { HomeModule } from './home/home.module';
import { DealersModule } from './dealers/dealers.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    CarsComponent,
    
    SlideToggleComponent,
    CarsTabsComponent,
    ByCategoryCarsComponent,
    AllCarsComponent,
    MdCarCardComponent,
    MainComponent
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
    HomeModule,
    DealersModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { apiBase: '/', delay: 200 })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
