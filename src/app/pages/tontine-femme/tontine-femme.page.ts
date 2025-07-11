import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-tontine-femme',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tontine-femme.page.html',
  styleUrls: ['./tontine-femme.page.scss'],
})
export class TontineFemmePage {
  sousTontines = [
    {
      nom: 'Argent',
      montant: 10000,
      membres: 20,
      duree: 10,
      icon: 'wallet',
      image: 'assets/images/tontines/argent.png'
    },
    {
      nom: 'Accessoires',
      montant: 5000,
      membres: 15,
      duree: 8,
      icon: 'bag-handle',
      image: 'assets/images/tontines/accessoires.png'
    },
    {
      nom: 'Tissus',
      montant: 8000,
      membres: 18,
      duree: 6,
      icon: 'shirt',
      image: 'assets/images/tontines/tissus.png'
    },
    {
      nom: 'Beauté',
      montant: 6000,
      membres: 12,
      duree: 5,
      icon: 'sparkles',
      image: 'assets/images/tontines/beaute.png'
    },
    {
      nom: 'Assiettes',
      montant: 4000,
      membres: 10,
      duree: 4,
      icon: 'restaurant',
      image: 'assets/images/tontines/assiettes.png'
    }
  ];

  constructor(private alertCtrl: AlertController) {}

  async rejoindre(nom: string) {
    this.genererPDF(nom);

    const alert = await this.alertCtrl.create({
      header: '🌸 Bienvenue !',
      message: `Vous avez rejoint la Tontine <strong>${nom}</strong>.`,
      buttons: ['Merci'],
      cssClass: 'custom-alert'
    });
    await alert.present();
  }

  genererPDF(nom: string) {
    const tontine = this.sousTontines.find(t => t.nom === nom);
    if (!tontine) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Reçu de participation - Tontine Femme', 20, 20);

    doc.setFontSize(14);
    doc.text(`Nom : ${tontine.nom}`, 20, 40);
    doc.text(`Montant : ${tontine.montant} FCFA`, 20, 50);
    doc.text(`Membres : ${tontine.membres}`, 20, 60);
    doc.text(`Durée : ${tontine.duree} mois`, 20, 70);

    doc.text('Merci pour votre engagement solidaire 💖', 20, 90);

    doc.save(`Recu-Tontine-Femme-${tontine.nom}.pdf`);
  }
}
