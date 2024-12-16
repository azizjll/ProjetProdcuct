import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];

  ngOnInit(): void {
    // Récupérer la liste des appartements depuis le localStorage
    const storedApartments = localStorage.getItem('apartments');
    if (storedApartments) {
      this.apartments = JSON.parse(storedApartments);
    }
  }
}
