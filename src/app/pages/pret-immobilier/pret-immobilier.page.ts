import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pret-immobilier',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './pret-immobilier.page.html',
  styleUrls: ['./pret-immobilier.page.scss']
})
export class PretImmobilierPage {
  propertyTypes = [
    { value: 'maison', label: 'Maison', image: 'assets/img/maison.jpg' },
    { value: 'appartement', label: 'Appartement', image: 'assets/img/appartement.jpg' },
    { value: 'terrain', label: 'Terrain', image: 'assets/img/terrain.jpg' },
    { value: 'renovation', label: 'Rénovation', image: 'assets/img/renovation.jpg' }
  ];

  propertyRates: { [key: string]: number } = {
    maison: 0.065,
    appartement: 0.067,
    terrain: 0.06,
    renovation: 0.07
  };

  featuredProperties = [
    { image: 'assets/img/villa1.jpg', title: 'Villa à Diamniadio', price: 35000000 },
    { image: 'assets/img/appart2.jpg', title: 'Appartement à Dakar', price: 25000000 },
    { image: 'assets/img/terrain-thies.jpg', title: 'Terrain à Thiès', price: 15000000 }
  ];

  loanAmount: number = 20000000;
  selectedDuration: number = 15;
  durationOptions: number[] = [5, 10, 15, 20, 25];
  selectedPropertyType: string = 'maison';

  constructor(private alertController: AlertController) {}

  /**
   * Calcule la mensualité en fonction du montant, durée et taux selon le type.
   */
  calculatePayment(): number {
    const annualRate = this.getRate();
    const monthlyRate = annualRate / 12;
    const totalMonths = this.selectedDuration * 12;

    if (monthlyRate === 0) return this.loanAmount / totalMonths;

    return (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
           (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  /**
   * Récupère le label du type de bien sélectionné.
   */
  getLabel(): string {
    const selected = this.propertyTypes.find(t => t.value === this.selectedPropertyType);
    return selected ? selected.label : '';
  }

  /**
   * Récupère le taux annuel en fonction du type sélectionné.
   */
  getRate(): number {
    return this.propertyRates[this.selectedPropertyType] || 0.065;
  }

  /**
   * Affiche une alerte de confirmation, puis génère un reçu PDF.
   */
  async submitRequest(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: `Demande de prêt immobilier pour un(e) <strong>${this.getLabel()}</strong> de <strong>${this.loanAmount.toLocaleString()} FCFA</strong> sur <strong>${this.selectedDuration} ans</strong>.`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Confirmer',
          handler: () => {
            this.genererPDF();
            this.showSuccess();
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Affiche une alerte de succès.
   */
  async showSuccess(): Promise<void> {
    const alert = await this.alertController.create({
      header: '✅ Succès',
      message: 'Votre demande de prêt a été envoyée. Un conseiller vous contactera sous peu.',
      buttons: ['OK']
    });

    await alert.present();
  }

  /**
   * Génère un reçu PDF avec les détails de la demande de prêt immobilier.
   */
  genererPDF() {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    doc.setFontSize(18);
    doc.text('Reçu de demande de prêt immobilier', 20, 20);

    doc.setFontSize(12);
    doc.text(`📅 Date : ${date}`, 20, 30);
    doc.text(`🏠 Type de bien : ${this.getLabel()}`, 20, 40);
    doc.text(`💰 Montant demandé : ${this.loanAmount.toLocaleString()} FCFA`, 20, 50);
    doc.text(`📆 Durée : ${this.selectedDuration} ans`, 20, 60);
    doc.text(`📈 Taux annuel : ${(this.getRate() * 100).toFixed(2)} %`, 20, 70);
    doc.text(`💳 Mensualité estimée : ${this.calculatePayment().toFixed(0)} FCFA/mois`, 20, 80);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text('Merci d’avoir utilisé SunuTontine. Nous vous contacterons bientôt.', 20, 100);

    doc.save(`recu-pret-immobilier-${date}.pdf`);
  }
}
