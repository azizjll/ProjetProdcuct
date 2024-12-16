import { Component } from '@angular/core';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  residences: Residence[] = [
    { id: 1, name: 'Résidence A', address: 'Adresse A', image: '', status: 'Active' },
    { id: 2, name: 'Résidence B', address: 'Adresse B', image: '', status: 'Inactive' }
  ];

  ngOnInit(): void {
    // Récupérer les résidences depuis le localStorage
    this.residences = JSON.parse(localStorage.getItem('residences') || '[]');
  }
  

}
