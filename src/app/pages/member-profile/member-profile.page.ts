import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-profile',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './member-profile.page.html',
  styleUrls: ['./member-profile.page.scss']
})
export class MemberProfilePage {
  member: any;

  private allMembers = [
    {
      id: 1,
      name: 'Youssou Dramé',
      role: 'Trésorière',
      phone: '77 180 12 92',
      email: 'youssou.drame@unchk.edu.sn',
      bio: 'Responsable des finances de la tontine avec 5 ans d\'expérience.',
      initials: 'FD',
      color: '#8E44AD',
      photo: 'assets/members/fatou.jpg'
    },
    {
      id: 2,
      name: 'Abdoul Wahab Gueye',
      role: 'Président',
      phone: '77 291 78 00',
      email: 'abdoulwahab.gueye@unchk.edu.sn',
      bio: 'Président dynamique qui dirige la tontine depuis 2025.',
      initials: 'AWG',
      color: '#3498DB',
      photo: 'assets/members/wahab.jpg'
    },
    {
      id: 3,
      name: 'Nah Awa Faye',
      role: 'Secrétaire',
      phone: '77 537 14 81',
      email: 'nahawa.faye@unchk.edu.sn',
      bio: 'Organise les réunions et tient les registres avec rigueur.',
      initials: 'NAF',
      color: '#E74C3C',
      photo: 'assets/members/mame.jpg'
    },
    {
      id: 4,
      name: 'Rokhaya Dione',
      role: 'Vice-présidente',
      phone: '70 938 67 54',
      email: 'rokhaya.dione3@unchk.edu.sn',
      bio: 'Second le président dans la gestion des affaires courantes.',
      initials: 'RD',
      color: '#2ECC71',
      photo: 'assets/members/aissatou.jpg'
    },
    {
      id: 5,
      name: 'Serigne Djibril Ndiaye',
      role: 'Responsable communication',
      phone: '76 609 12 19',
      email: 'serignedjibril.ndiaye@unchk.edu',
      bio: 'Gère la communication interne et externe de la tontine.',
      initials: 'SDN',
      color: '#F39C12',
      photo: 'assets/members/serigne.jpg'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    const memberId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.member = this.allMembers.find(m => m.id === memberId);

    if (!this.member) {
      this.router.navigate(['/members']);
    }
  }

  async contactMember() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: `Voulez-vous contacter <strong>${this.member?.name}</strong> ?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Contacter',
          handler: () => {
            // Action après confirmation (par exemple ouvrir l'email ou autre)
            console.log('Contact confirmé.');
          }
        }
      ]
    });

    await alert.present();
  }
}
