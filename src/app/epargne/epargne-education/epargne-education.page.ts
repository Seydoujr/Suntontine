import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-epargne-education',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './epargne-education.page.html',
  styleUrls: ['./epargne-education.page.scss']
})
export class EpargneEducationPage {
  constructor(private router: Router) {}

  ouvrirCompte() {
    this.router.navigate(['/souscription-education']);
  }
}
