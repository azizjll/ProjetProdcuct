import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ResidenceComponent } from './components/residence/residence.component';
import { FormsModule } from '@angular/forms';
import { ResidenceDetailsComponent } from './components/residence/residence-details/residence-details.component';
import { AddApartmentsComponent } from './components/apartments/add-apartments/add-apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddResidenceComponent } from './components/residence/add-residence/add-residence.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    AddApartmentsComponent,
    ApartmentsByResidenceComponent,
    ResidenceComponent,
    AddResidenceComponent,
    ResidenceDetailsComponent,
    HomeComponent
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
