import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes , RouterModule} from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { RestaurantListComponent } from './reservations/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './reservations/restaurant-details/restaurant-details.component';
import { RestaurantItemComponent } from './reservations/restaurant-list/restaurant-item/restaurant-item.component';
import { AthidhiLayoutComponent } from './reservations/athidhi-layout/athidhi-layout.component';
import { AthidhiComponent } from './athidhi/athidhi.component';
import { SwagathComponent } from './swagath/swagath.component';
import { DetailsComponent } from './reservations/details/details.component';
import { FillComponent } from './fill/fill.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactusComponent,
    ReservationsComponent,
    HomeComponent,
    TableComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantItemComponent,
    AthidhiLayoutComponent,
    AthidhiComponent,
    SwagathComponent,
    DetailsComponent,    
    FillComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
