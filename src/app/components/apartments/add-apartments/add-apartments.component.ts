import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-add-apartments',
  templateUrl: './add-apartments.component.html',
  styleUrls: ['./add-apartments.component.css']
})
export class AddApartmentsComponent {
  apartment: Apartment = new Apartment();

  constructor(private router: Router) {}

  // Méthode pour ajouter l'appartement et rediriger vers la page des appartements
  addApartment() {
    // Ajouter l'appartement dans le stockage local
    let apartments: Apartment[] = JSON.parse(localStorage.getItem('apartments') || '[]');
    apartments.push({ ...this.apartment });
    localStorage.setItem('apartments', JSON.stringify(apartments));

    // Réinitialiser le formulaire
    this.apartment = new Apartment();

    // Rediriger vers la page des appartements
    this.router.navigate(['/apartments']);
  }
}
