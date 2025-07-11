import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  tontines = [
    { id: 1, name: 'Tontine A', amount: 100000, color: '#22c55e' },
    { id: 2, name: 'Tontine B', amount: 50000, color: '#facc15' }
  ];
  prets = [
    { id: 1, titre: 'Prêt Express', details: '50.000 FCFA - 30 jours' },
    { id: 2, titre: 'Crédit Groupe', details: '250.000 FCFA - 3 mois' }
  ];
  epargnes = [
    { id: 1, titre: 'Épargne Sécurité', details: '15.000 FCFA/mois' },
    { id: 2, titre: 'Projet Familial', details: '100.000 FCFA objectif' }
  ];

  promoText: string = '';
  private fullPromoText: string = "L'application SUNUTONTINE sera bientôt disponible. Pour faire partie des 05 premiers utilisateurs éligibles et gagner 2 000 F, venez découvrir l'offre et vous y inscrire";
  private promoIndex: number = 0;

  showUserMenu = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.animatePromoText();
  }

  private animatePromoText() {
    if (this.promoIndex < this.fullPromoText.length) {
      this.promoText += this.fullPromoText.charAt(this.promoIndex);
      this.promoIndex++;
      setTimeout(() => this.animatePromoText(), 40);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  createTontine() {
    this.router.navigate(['/details-tontine'], {
      queryParams: { new: true, type: 'tontine' }
    });
  }

  openDetails(tontine: any) {
    this.router.navigate(['/details-tontine'], {
      queryParams: { type: 'tontine', id: tontine.id }
    });
  }

  viewPret(pret: any) {
    this.router.navigate(['/details-tontine'], {
      queryParams: { type: 'pret', id: pret.id }
    });
  }

  viewEpargne(epargne: any) {
    this.router.navigate(['/details-tontine'], {
      queryParams: { type: 'epargne', id: epargne.id }
    });
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  async showPromo() {
    const alert = await this.alertController.create({
      header: '🎁 Offre Spéciale',
      message: '0% frais de retrait jusqu’au 15 Décembre !',
      buttons: ['OK']
    });

    await alert.present();
  }
}
