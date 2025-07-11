import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-tontine-professionnelle',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tontine-professionnelle.page.html',
  styleUrls: ['./tontine-professionnelle.page.scss']
})
export class TontineProfessionnellePage {
  montant = 25000;
  duree = 6;
  membres = 15;

  constructor(private alertController: AlertController) {}

  async rejoindreCercle() {
    this.telechargerPDF();

    const alert = await this.alertController.create({
      header: '✅ Inscription enregistrée',
      message: `
        <p>
          Vous avez rejoint la <strong>Tontine Professionnelle</strong><br>
          Montant : <strong>${this.montant} FCFA</strong><br>
          Durée : <strong>${this.duree} mois</strong><br>
          Membres : <strong>${this.membres}</strong><br><br>
          📄 Un reçu PDF a été généré.
        </p>
      `,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  telechargerPDF() {
    const doc = new jsPDF();
    const titre = 'Reçu de Participation - Tontine Professionnelle';
    const date = new Date().toLocaleDateString();

    doc.setFontSize(16);
    doc.setTextColor(33, 37, 41);
    doc.text(titre, 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`📅 Date : ${date}`, 20, 35);
    doc.text(`💼 Nom de la tontine : Tontine Professionnelle`, 20, 45);
    doc.text(`💰 Montant mensuel : ${this.montant} FCFA`, 20, 55);
    doc.text(`📆 Durée : ${this.duree} mois`, 20, 65);
    doc.text(`👥 Nombre de membres : ${this.membres}`, 20, 75);

    doc.setTextColor(100);
    doc.text('Merci d’avoir rejoint un cercle professionnel de confiance sur SunuTontine !', 20, 95);

    doc.save('recu-tontine-professionnelle.pdf');
  }
}
