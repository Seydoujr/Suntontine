import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pret-voiture',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './pret-voiture.page.html',
  styleUrls: ['./pret-voiture.page.scss']
})
export class PretVoiturePage {
  loanAmount = 5000000;
  loanDuration = '24';
  selectedCar: any = null;

  cars = [
    {
      name: 'Toyota Yaris',
      price: 6000000,
      image: 'assets/voitures/yaris.jpg'
    },
    {
      name: 'Hyundai Accent',
      price: 7500000,
      image: 'assets/voitures/accent.jpg'
    },
    {
      name: 'Kia Picanto',
      price: 5000000,
      image: 'assets/voitures/picanto.jpg'
    },
    {
      name: 'Peugeot 208',
      price: 8200000,
      image: 'assets/voitures/peugeot208.jpg'
    }
  ];

  constructor(private alertController: AlertController) {}

  selectCar(car: any) {
    this.selectedCar = car;
    this.loanAmount = car.price;
  }

  calculatePayment(): number {
    const amount = this.loanAmount;
    const months = parseInt(this.loanDuration);
    const monthlyRate = 0.075 / 12;

    return (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
           (Math.pow(1 + monthlyRate, months) - 1);
  }

  async submitRequest() {
    if (!this.selectedCar) {
      const alert = await this.alertController.create({
        header: 'Voiture non sélectionnée',
        message: 'Veuillez choisir une voiture pour continuer.',
        buttons: ['OK']
      });
      return alert.present();
    }

    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: `
        <strong>Voiture :</strong> ${this.selectedCar.name}<br>
        <strong>Montant :</strong> ${this.loanAmount.toLocaleString()} FCFA<br>
        <strong>Durée :</strong> ${this.loanDuration} mois
      `,
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

  async showSuccess() {
    const alert = await this.alertController.create({
      header: 'Demande envoyée ✅',
      message: 'Votre demande de prêt voiture a été enregistrée avec succès. Un conseiller vous contactera bientôt.',
      buttons: ['OK']
    });
    await alert.present();
  }

  genererPDF() {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    doc.setFontSize(18);
    doc.text('Reçu de demande de prêt voiture', 20, 20);

    doc.setFontSize(12);
    doc.text(`📅 Date : ${date}`, 20, 30);
    doc.text(`🚗 Voiture choisie : ${this.selectedCar.name}`, 20, 40);
    doc.text(`💰 Montant demandé : ${this.loanAmount.toLocaleString()} FCFA`, 20, 50);
    doc.text(`📆 Durée : ${this.loanDuration} mois`, 20, 60);
    doc.text(`💳 Mensualité estimée : ${this.calculatePayment().toFixed(0)} FCFA`, 20, 70);
    doc.text(`📈 Taux fixe : 7.5%`, 20, 80);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text('Merci d’avoir utilisé SunuTontine. Notre équipe vous contactera sous peu.', 20, 100);

    doc.save(`recu-pret-voiture-${date}.pdf`);
  }
}
