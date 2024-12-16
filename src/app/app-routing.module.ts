import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './components/residence/residence.component';
import { AddResidenceComponent } from './components/residence/add-residence/add-residence.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { AddApartmentsComponent } from './components/apartments/add-apartments/add-apartments.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'residences', component: ResidenceComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'add-apartment', component: AddApartmentsComponent},
  { path: '**', redirectTo: '' } // Redirige vers Home en cas de route invalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
