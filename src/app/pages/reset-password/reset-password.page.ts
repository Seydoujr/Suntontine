import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  cni: string = '';
  email: string = '';
  newPassword: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  async resetPassword() {
    if (!this.cni || !this.email || this.newPassword.length < 6) {
      const toast = await this.toastController.create({
        message: 'Veuillez remplir tous les champs correctement.',
        duration: 2500,
        color: 'danger',
      });
      await toast.present();
      return;
    }

    // Ici, tu peux ajouter l’appel à ton backend pour enregistrer le nouveau mot de passe

    const toast = await this.toastController.create({
      message: 'Mot de passe mis à jour avec succès ✅',
      duration: 2500,
      color: 'success',
    });
    await toast.present();

    this.router.navigate(['/login']);
  }
}
