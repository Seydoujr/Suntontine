import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-tontine-voyage',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './tontine-voyage.page.html',
  styleUrls: ['./tontine-voyage.page.scss']
})
export class TontineVoyagePage {
  montant = 15000;
  duree = 8;
  destination = 'Dakar 🇸🇳';
  agenceSelectionnee: string | null = null;

  destinations = [
    'Dakar 🇸🇳', 'Ziguinchor 🇸🇳', 'Thiès 🇸🇳',
    'Touba - Magal 🇸🇳', 'Tivaouane - Gamou 🇸🇳',
    'Parcs Nationaux 🇸🇳', 'Paris 🇫🇷', 'USA 🇺🇸',
    'Canada 🇨🇦', 'Allemagne 🇩🇪', 'Zanzibar 🇹🇿'
  ];

  agences = [
    { nom: 'Dakar Voyages', logo: 'assets/logos/dakar-voyages.png' },
    { nom: 'SenAfrica Tours', logo: 'assets/logos/senafrica-tours.png' },
    { nom: 'Teranga Travel', logo: 'assets/logos/teranga-travel.png' }
  ];

  constructor(private alertController: AlertController) {}

  async rejoindre() {
    this.telechargerPDF(); // Génère PDF

    const message = this.agenceSelectionnee
      ? `Vous avez rejoint la Tontine Voyage vers <strong>${this.destination}</strong> avec <strong>${this.agenceSelectionnee}</strong> !`
      : `Vous avez rejoint la Tontine Voyage vers <strong>${this.destination}</strong> !`;

    const alert = await this.alertController.create({
      header: '✈️ Bon Voyage !',
      message: `${message}<br>📄 Un reçu PDF a été généré.`,
      buttons: ['Super !']
    });

    await alert.present();
  }

  telechargerPDF() {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    doc.setFontSize(16);
    doc.text('Reçu de Participation - Tontine Voyage', 20, 20);

    doc.setFontSize(12);
    doc.text(`📅 Date : ${date}`, 20, 35);
    doc.text(`🌍 Destination : ${this.destination}`, 20, 45);
    doc.text(`🏢 Agence : ${this.agenceSelectionnee || 'Non spécifiée'}`, 20, 55);
    doc.text(`💰 Montant mensuel : ${this.montant} FCFA`, 20, 65);
    doc.text(`📆 Durée : ${this.duree} mois`, 20, 75);

    doc.setTextColor(90);
    doc.text('Merci d’avoir choisi SunuTontine pour vos projets de voyage !', 20, 95);

    doc.save(`recu-tontine-voyage-${date}.pdf`);
  }
}
