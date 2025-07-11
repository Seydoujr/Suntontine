import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-epargne-objectifs',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './epargne-objectifs.page.html',
  styleUrls: ['./epargne-objectifs.page.scss']
})
export class EpargneObjectifsPage {
  objectif: string = '';
  montant: number = 0;

  constructor(private toastController: ToastController) {}

  async validerObjectif() {
    if (!this.objectif || this.montant <= 0) {
      const toast = await this.toastController.create({
        message: 'Veuillez remplir tous les champs correctement.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    const toast = await this.toastController.create({
      message: `🎯 Objectif "${this.objectif}" enregistré avec ${this.montant.toLocaleString()} FCFA.`,
      duration: 2500,
      color: 'success'
    });
    await toast.present();

    // On ne vide pas ici pour permettre le téléchargement du PDF ensuite
  }

  telechargerPDF() {
    if (!this.objectif || this.montant <= 0) {
      return; // Ne fait rien si les données sont incomplètes
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Reçu d’Épargne Objectifs - SunuTontine', 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(80);
    doc.text(`🎯 Objectif : ${this.objectif}`, 20, 40);
    doc.text(`💰 Montant épargné : ${this.montant.toLocaleString()} FCFA`, 20, 50);
    doc.text(`📅 Date : ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`, 20, 60);
    doc.text(`🔐 Statut : Confirmé`, 20, 70);

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Merci de votre confiance avec SunuTontine.', 20, 90);

    doc.save('recu_epargne_objectifs.pdf');

    // Réinitialiser après génération du PDF
    this.objectif = '';
    this.montant = 0;
  }
}
