import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pret',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './pret.page.html',
  styleUrls: ['./pret.page.scss']
})
export class PretPage {
  prets = [
    {
      title: 'Prêt Rapide',
      description: 'Obtenez votre argent en 24h pour vos besoins urgents.',
      icon: 'flash-outline',
      color: '#16a34a',
      route: '/pret-rapide'
    },
    {
      title: 'Crédit Solidaire',
      description: 'Prêt entre membres de confiance, sans garantie bancaire.',
      icon: 'hand-left-outline',
      color: '#0e7490',
      route: '/credit-solidaire'
    },
    {
      title: 'Prêt Voiture',
      description: 'Financez votre véhicule avec des taux avantageux.',
      icon: 'car-sport-outline',
      color: '#d97706',
      route: '/pret-voiture'
    },
    {
      title: 'Prêt Immobilier',
      description: 'Réalisez votre projet immobilier en toute sérénité.',
      icon: 'home-outline',
      color: '#9333ea',
      route: '/pret-immobilier'
    }
  ];

  constructor(private alertController: AlertController) {}

  trackLoanClick(loanType: string) {
    console.log(`Prêt sélectionné : ${loanType}`);
    // Ici un service de tracking pourrait être ajouté
  }

  async confirmCall(event: Event, phoneNumber: string) {
    event.preventDefault(); // Bloque l'appel direct

    const alert = await this.alertController.create({
      header: 'Confirmer l’appel',
      message: `Voulez-vous appeler le numéro ${phoneNumber} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        { 
          text: 'Appeler', 
          handler: () => {
            window.location.href = `tel:${phoneNumber}`;
          }
        }
      ]
    });

    await alert.present();
  }
}
