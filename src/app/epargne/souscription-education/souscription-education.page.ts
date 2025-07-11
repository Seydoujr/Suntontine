import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-souscription-education',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './souscription-education.page.html',
  styleUrls: ['./souscription-education.page.scss'],
})
export class SouscriptionEducationPage {
  nom = '';
  prenom = '';
  email = '';
  montant = '';
  enfantNom = '';
  duree = '';
  acceptConditions = false;

  submitForm() {
    if (!this.acceptConditions) {
      alert('Veuillez accepter les conditions générales pour continuer.');
      return;
    }

    alert('🎉 Souscription réussie ! Reçu PDF disponible ci-dessous.');
  }

  telechargerPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Reçu - Épargne Éducation SunuTontine', 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(80);
    doc.text(`👤 Parent : ${this.nom} ${this.prenom}`, 20, 40);
    doc.text(`📧 Email : ${this.email}`, 20, 50);
    doc.text(`👶 Enfant : ${this.enfantNom}`, 20, 60);
    doc.text(`💰 Montant mensuel : ${this.montant} FCFA`, 20, 70);
    doc.text(`📆 Durée : ${this.duree} mois`, 20, 80);
    doc.text(`🗓️ Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 20, 90);

    doc.setTextColor(150);
    doc.text('Merci pour votre confiance envers SunuTontine.', 20, 110);

    doc.save('recu_souscription_education.pdf');
  }
}
