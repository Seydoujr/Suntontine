import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ouvrir-compte-epargne',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './ouvrir-compte-epargne.page.html',
  styleUrls: ['./ouvrir-compte-epargne.page.scss'],
})
export class OuvrirCompteEpargnePage {
  nom = '';
  email = '';
  montantInitial = '';

  constructor(private alertCtrl: AlertController) {}

  async soumettre() {
    const alert = await this.alertCtrl.create({
      header: 'Compte créé 🎉',
      message: `
        <strong>${this.nom}</strong>, votre demande d’ouverture de compte a été enregistrée.<br>
        Nous vous contacterons par email à <strong>${this.email}</strong>.
      `,
      buttons: ['OK'],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
}
