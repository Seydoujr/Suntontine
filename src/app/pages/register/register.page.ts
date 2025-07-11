import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullname: string = '';
  email: string = '';
  password: string = '';
  idNumber: string = '';
  notRobot: boolean = false;

  captchaA: number = 0;
  captchaB: number = 0;
  captchaAnswer: number | null = null;

  constructor(private router: Router) {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captchaA = Math.floor(Math.random() * 10);
    this.captchaB = Math.floor(Math.random() * 10);
  }

  isEmailValid(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  isCniValid(cni: string): boolean {
    // CNI typique au Sénégal : 13 chiffres
    const regex = /^\d{13}$/;
    return regex.test(cni);
  }

  register() {
    const correctAnswer = this.captchaA + this.captchaB;

    if (!this.fullname || !this.email || !this.password || !this.idNumber) {
      alert('Tous les champs sont requis.');
      return;
    }

    if (!this.isEmailValid(this.email)) {
      alert("L'adresse email n'est pas valide.");
      return;
    }

    if (!this.isCniValid(this.idNumber)) {
      alert('Le numéro CNI doit contenir exactement 13 chiffres.');
      return;
    }

    if (this.password.length < 6) {
      alert('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    if (!this.notRobot) {
      alert('Veuillez confirmer que vous n’êtes pas un robot.');
      return;
    }

    if (this.captchaAnswer !== correctAnswer) {
      alert('Réponse au test de sécurité incorrecte.');
      this.generateCaptcha();
      this.captchaAnswer = null;
      return;
    }

    alert('Inscription réussie !');
    this.router.navigate(['/login']);
  }
}
