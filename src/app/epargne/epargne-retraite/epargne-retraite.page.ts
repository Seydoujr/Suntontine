import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-epargne-retraite',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './epargne-retraite.page.html',
  styleUrls: ['./epargne-retraite.page.scss']
})
export class EpargneRetraitePage {
  montant: number = 0;
  ageRetraite: number = 60;
  montantFinal: number | null = null;
  loading: boolean = false;

  constructor(private toastController: ToastController) {}

  async validerRetraite() {
    if (this.montant <= 0 || this.ageRetraite < 40 || this.ageRetraite > 70) {
      const toast = await this.toastController.create({
        message: 'Veuillez entrer un montant valide et un âge raisonnable.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    this.loading = true;

    setTimeout(async () => {
      const ageActuel = 30;
      const duree = this.ageRetraite - ageActuel;
      this.montantFinal = this.montant * 12 * duree;

      const toast = await this.toastController.create({
        message: `🧓 Épargne estimée : ${this.montantFinal.toLocaleString()} FCFA jusqu’à ${this.ageRetraite} ans.`,
        duration: 2500,
        color: 'success'
      });
      await toast.present();

      this.loading = false;
    }, 1200);
  }

  telechargerPDF() {
    const doc = new jsPDF();
    const titre = 'Simulation Épargne Retraite - SunuTontine';
    const date = new Date().toLocaleDateString();

    doc.setFontSize(16);
    doc.text(titre, 20, 20);

    doc.setFontSize(12);
    doc.text(`📅 Date : ${date}`, 20, 30);
    doc.text(`💰 Montant mensuel : ${this.montant} FCFA`, 20, 40);
    doc.text(`🎯 Âge de retraite : ${this.ageRetraite} ans`, 20, 50);
    doc.text(`📈 Estimation à la retraite : ${this.montantFinal?.toLocaleString() || 'Non calculé'} FCFA`, 20, 60);

    doc.setTextColor(100);
    doc.text('Merci d’avoir utilisé SunuTontine pour planifier votre avenir !', 20, 80);

    doc.save('simulation-retraite.pdf');
  }
}
