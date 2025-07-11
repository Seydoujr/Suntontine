import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offre-lancement',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './offre-lancement.page.html',
  styleUrls: ['./offre-lancement.page.scss'],
})
export class OffreLancementPage {}
