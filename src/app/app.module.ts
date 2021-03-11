import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item/menu-item.component';
import { HomeComponent } from './home/home/home.component';
import { CarsComponent } from './cars/cars/cars.component';
import { DaelersComponent } from './dealers/daelers/daelers.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuItemComponent,
    HomeComponent,
    CarsComponent,
    DaelersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
