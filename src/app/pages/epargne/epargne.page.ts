import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-epargne',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './epargne.page.html',
  styleUrls: ['./epargne.page.scss']
})
export class EpargnePage {
  services = [
    {
      title: 'Épargne Classique',
      icon: 'wallet-outline',
      route: '/epargne-classique',
      color: '#0ea5e9'
    },
    {
      title: 'Épargne Objectifs',
      icon: 'trending-up-outline',
      route: '/epargne-objectifs',
      color: '#10b981'
    },
    {
      title: 'Épargne Retraite',
      icon: 'hourglass-outline',
      route: '/epargne-retraite',
      color: '#f59e0b'
    },
    {
      title: 'Épargne Éducation',
      icon: 'school-outline',
      route: '/epargne-education',
      color: '#6366f1'
    }
  ];
}
