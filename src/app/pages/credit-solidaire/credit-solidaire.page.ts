import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-credit-solidaire',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './credit-solidaire.page.html',
  styleUrls: ['./credit-solidaire.page.scss']
})
export class CreditSolidairePage {
  loanAmount = 500000;
  maxAmount = 2000000;
  duration = 6;
  solidarityGroup = '';
  selectedOperator: string | null = null;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async submitRequest() {
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
      header: '📄 Vérification de la demande',
      message: `
        <div class="confirmation-message">
          <ion-icon name="alert-circle-outline" color="warning"></ion-icon>
          <p>Vous êtes sur le point de demander un <strong>crédit solidaire</strong> de :</p>
          <p><strong>${this.loanAmount.toLocaleString()} FCFA</strong> pour une durée de <strong>${this.duration} mois</strong>.</p>
          <p>Groupe solidaire : <strong>${this.solidarityGroup}</strong></p>
          <p>Opérateur choisi : <strong>${this.selectedOperator === 'wave' ? 'Wave' : 'Orange Money'}</strong></p>
        </div>
      `,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Modifier',
          role: 'cancel',
          cssClass: 'alert-cancel'
        },
        {
          text: 'Confirmer',
          cssClass: 'alert-confirm',
          handler: () => this.showSuccess()
        }
      ]
    });

    await alert.present();
  }

  private async showSuccess() {
    this.generatePDF();

    const successAlert = await this.alertController.create({
      header: '🎉 Demande soumise',
      message: `
        <div class="success-message">
          <ion-icon name="checkmark-circle-outline" color="success"></ion-icon>
          <p>Votre demande de crédit solidaire a été enregistrée avec succès.</p>
          <p>Un conseiller vous contactera dans les 48h.</p>
        </div>
      `,
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => this.router.navigate(['/pret'])
        }
      ]
    });

    await successAlert.present();
  }

  generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('📄 Reçu - Crédit Solidaire', 20, 20);

    doc.setFontSize(12);
    doc.text(`👥 Groupe : ${this.solidarityGroup}`, 20, 40);
    doc.text(`💵 Montant : ${this.loanAmount.toLocaleString()} FCFA`, 20, 50);
    doc.text(`⏳ Durée : ${this.duration} mois`, 20, 60);
    doc.text(`📲 Opérateur : ${this.selectedOperator === 'wave' ? 'Wave' : 'Orange Money'}`, 20, 70);
    doc.text(`📅 Date : ${new Date().toLocaleDateString()}`, 20, 80);

    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text('Merci d’avoir choisi SunuTontine pour votre crédit solidaire.', 20, 100);

    doc.save('recu_credit_solidaire.pdf');
  }
}
