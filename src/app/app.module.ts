import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { LikecarComponent } from './like-car/likecar.component';
import { MycarsComponent } from './my-cars/mycars.component';
import { DealersComponent } from './dealers/dealers/dealers.component';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { DaelrspageComponent } from './daelrspage/daelrspage.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MenuItemComponent,
    HomeComponent,
    CarsComponent,
    LikecarComponent,
    MycarsComponent,
    DealersComponent,
    ButtonComponent,
    CardComponent,
    DaelrspageComponent,
    SlideToggleComponent,
    TabsComponent

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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
