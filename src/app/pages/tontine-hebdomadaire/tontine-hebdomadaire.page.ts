import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-tontine-hebdomadaire',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tontine-hebdomadaire.page.html',
  styleUrls: ['./tontine-hebdomadaire.page.scss']
})
export class TontineHebdomadairePage {
  sousTontines = [
    {
      nom: 'Chaussures',
      montant: 3000,
      participants: 10,
      duree: 6,
      icon: 'walk',
      image: 'assets/images/tontines/chaussures.png'
    },
    {
      nom: 'Courses',
      montant: 4000,
      participants: 8,
      duree: 5,
      icon: 'cart',
      image: 'assets/images/tontines/courses.png'
    },
    {
      nom: 'Parfum',
      montant: 2500,
      participants: 6,
      duree: 4,
      icon: 'rose',
      image: 'assets/images/tontines/beaute-express.png'
    },
    {
      nom: 'Urgences',
      montant: 5000,
      participants: 12,
      duree: 8,
      icon: 'alert-circle',
      image: 'assets/images/tontines/urgences.png'
    },
    {
      nom: 'Téléphone',
      montant: 15000,
      participants: 10,
      duree: 10,
      icon: 'phone-portrait',
      image: 'assets/images/tontines/telephone.png'
    },
    {
      nom: 'Ordinateur',
      montant: 25000,
      participants: 8,
      duree: 12,
      icon: 'laptop',
      image: 'assets/images/tontines/ordinateur.png'
    }
  ];

  constructor(private alertCtrl: AlertController) {}

  async rejoindreTontine(nom: string) {
    this.genererPDF(nom);

    const alert = await this.alertCtrl.create({
      header: '✅ Rejoint !',
      message: `Vous avez rejoint la Tontine Hebdomadaire <strong>${nom}</strong>.`,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });
    await alert.present();
  }

  genererPDF(nom: string) {
    const tontine = this.sousTontines.find(t => t.nom === nom);
    if (!tontine) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Reçu de participation à la Tontine', 20, 20);

    doc.setFontSize(14);
    doc.text(`Nom de la tontine : ${tontine.nom}`, 20, 40);
    doc.text(`Montant / semaine : ${tontine.montant} FCFA`, 20, 50);
    doc.text(`Participants : ${tontine.participants}`, 20, 60);
    doc.text(`Durée : ${tontine.duree} semaines`, 20, 70);

    doc.text('Merci pour votre participation !', 20, 90);

    doc.save(`Recu-Tontine-${tontine.nom}.pdf`);
  }
}
