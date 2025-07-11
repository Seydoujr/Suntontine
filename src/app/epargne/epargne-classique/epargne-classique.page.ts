import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-epargne-classique',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './epargne-classique.page.html',
  styleUrls: ['./epargne-classique.page.scss']
})
export class EpargneClassiquePage {
  montant: number = 0;
  banque: string = '';
  banques = [
    'Crédit Mutuel du Sénégal',
    'Banque Islamique',
    'Crédits du Sénégal',
    'Ecobank'
  ];

  constructor(private toastController: ToastController) {}

  async validerEpargne() {
    if (this.montant <= 0 || !this.banque) {
      const toast = await this.toastController.create({
        message: 'Veuillez entrer un montant valide et choisir une banque.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    const toast = await this.toastController.create({
      message: `✅ Épargne de ${this.montant.toLocaleString()} FCFA enregistrée à la ${this.banque}.`,
      duration: 2500,
      color: 'success'
    });
    await toast.present();

    // Optionnel : Réinitialisation après validation
    // this.montant = 0;
    // this.banque = '';
  }

  telechargerPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Reçu d’Épargne Classique - SunuTontine', 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(80);
    doc.text(`🏦 Banque : ${this.banque}`, 20, 40);
    doc.text(`💰 Montant épargné : ${this.montant.toLocaleString()} FCFA`, 20, 50);
    doc.text(`📅 Date : ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`, 20, 60);
    doc.text(`🔐 Statut : Confirmé`, 20, 70);

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Merci de votre confiance avec SunuTontine.', 20, 90);

    doc.save('recu_epargne_classique.pdf');
  }
}
