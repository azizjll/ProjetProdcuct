import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence: Residence = new Residence();
  residences: Residence[] = [];

  // Injectez le service Router
  constructor(private router: Router) {}

  addResidence() {
    // Récupérer les résidences existantes dans le localStorage ou initialiser un tableau vide
    const residences = JSON.parse(localStorage.getItem('residences') || '[]');

    // Ajouter la nouvelle résidence au tableau
    residences.push(this.residence);

    // Sauvegarder le tableau mis à jour dans le localStorage
    localStorage.setItem('residences', JSON.stringify(residences));

    // Réinitialiser le formulaire
    this.residence = new Residence();

    // Rediriger vers la page des résidences
    this.router.navigate(['/residences']);
  }
}
