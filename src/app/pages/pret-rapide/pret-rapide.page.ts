import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pret-rapide',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './pret-rapide.page.html',
  styleUrls: ['./pret-rapide.page.scss']
})
export class PretRapidePage {
  amountOptions = [50000, 100000, 150000, 200000, 250000, 300000, 400000, 500000];
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  selectedOperator: string | null = null;

  constructor(private alertController: AlertController) {}

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = null;
  }

  selectCustomAmount() {
    if (this.customAmount && this.customAmount >= 50000 && this.customAmount <= 500000) {
      this.selectedAmount = this.customAmount;
    } else {
      this.selectedAmount = null;
    }
  }

  async demanderPret() {
    if (!this.selectedAmount) return;

    if (!this.selectedOperator) {
      const alert = await this.alertController.create({
        header: '⚠️ Choix requis',
        message: 'Veuillez sélectionner un opérateur pour récupérer votre crédit.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Confirmer votre demande',
      message: `Vous demandez un prêt de <strong>${this.selectedAmount.toLocaleString()} FCFA</strong> via <strong>${this.selectedOperator === 'wave' ? 'Wave' : 'Orange Money'}</strong>. Confirmez-vous cette demande ?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.presentSuccessAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: '✅ Demande envoyée !',
      message: `Votre demande de prêt de ${this.selectedAmount?.toLocaleString()} FCFA a été soumise. Vous recevrez une réponse sous 24h.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  genererRecuPDF() {
    const doc = new jsPDF();

    const montant = this.selectedAmount ? this.selectedAmount.toLocaleString() : 'N/A';
    const operateur = this.selectedOperator === 'wave'
      ? 'Wave'
      : this.selectedOperator === 'orange-money'
      ? 'Orange Money'
      : 'Non défini';

    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('📄 Reçu - Demande de Prêt Rapide', 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(80);
    doc.text(`💰 Montant demandé : ${montant} FCFA`, 20, 40);
    doc.text(`📱 Opérateur : ${operateur}`, 20, 50);
    doc.text(`📅 Date : ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`, 20, 60);
    doc.text(`🔐 Statut : En attente de validation`, 20, 70);

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Merci d’avoir utilisé SunuTontine pour votre demande de prêt.', 20, 90);

    doc.save('recu_pret_rapide.pdf');
  }
}
