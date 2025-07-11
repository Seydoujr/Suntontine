import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-historique-tontines',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './historique-tontines.page.html',
  styleUrls: ['./historique-tontines.page.scss'],
})
export class HistoriqueTontinesPage {
  historique = [
    {
      nom: 'Tontine Hebdomadaire - Chaussures',
      montant: 3000,
      duree: 6,
      date: '2025-07-05'
    },
    {
      nom: 'Tontine Femme - Beauté',
      montant: 6000,
      duree: 5,
      date: '2025-07-07'
    },
    {
      nom: 'Tontine Professionnelle',
      montant: 25000,
      duree: 6,
      date: '2025-07-09'
    }
  ];

  telechargerRecu(tontine: any) {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reçu de Tontine - SunuTontine', 20, 20);

    doc.setFontSize(12);
    doc.text(`Nom : ${tontine.nom}`, 20, 35);
    doc.text(`Date d'adhésion : ${tontine.date}`, 20, 45);
    doc.text(`Montant : ${tontine.montant} FCFA`, 20, 55);
    doc.text(`Durée : ${tontine.duree} semaines`, 20, 65);
    doc.text(`Merci de faire confiance à SunuTontine.`, 20, 85);

    doc.save(`recu-${tontine.nom.replace(/\s+/g, '-')}.pdf`);
  }
}
