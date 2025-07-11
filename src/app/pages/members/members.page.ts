import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss']
})
export class MembersPage {
  members = [
    {
      id: 1,
      name: 'Youssou Dramé',
      role: 'Trésorier',
      initials: 'YD',
      color: '#8E44AD',
      photo: 'assets/members/fatou.jpg'
    },
    {
      id: 2,
      name: 'Abdoul Wahab Gueye',
      role: 'Président',
      initials: 'AWG',
      color: '#3498DB',
      photo: 'assets/members/wahab.jpg'
    },
    {
      id: 3,
      name: 'Nah Awa Faye',
      role: 'Secrétaire',
      initials: 'NAF',
      color: '#E74C3C',
      photo: 'assets/members/mame.jpg'
    },
    {
      id: 4,
      name: 'Rokhaya Dione',
      role: 'Vice-présidente',
      initials: 'RD',
      color: '#2ECC71',
      photo: 'assets/members/aissatou.jpg'
    },
    {
      id: 5,
      name: 'Serigne Djibril Ndiaye',
      role: 'Responsable communication',
      initials: 'SDN',
      color: '#F39C12',
      photo: 'assets/members/serigne.jpg'
    }
  ];

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async ionViewDidEnter() {
    const toast = await this.toastController.create({
      message: '🚀 Bienvenue dans l’espace des membres !',
      duration: 2500,
      position: 'top',
      color: 'success',
      animated: true,
      cssClass: 'custom-toast'
    });

    await toast.present();
  }

  viewProfile(memberId: number) {
    this.router.navigate(['/member-profile'], {
      queryParams: { id: memberId }
    });
  }

  refreshMembers() {
    this.members = [...this.members]; // Simule un rafraîchissement
  }
}
