import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-tontine',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './details-tontine.page.html',
  styleUrls: ['./details-tontine.page.css']
})
export class DetailsTontinePage implements OnInit {
  itemType: 'tontine' | 'pret' | 'epargne' = 'tontine';
  currentItem: any = null;
  pageTitle: string = 'Détails';
  isNew = false;
  form: FormGroup;

  tontines = [
    { id: 1, name: 'Tontine A', amount: 100000, duration: '6 mois', members: 12, description: 'Tontine pour projet communautaire' },
    { id: 2, name: 'Tontine B', amount: 50000, duration: '3 mois', members: 8, description: 'Tontine éducative' }
  ];

  prets = [
    { id: 1, title: 'Prêt Express', amount: 50000, duration: '30 jours', description: 'Prêt rapide avec dossier simplifié' },
    { id: 2, title: 'Crédit Groupe', amount: 250000, duration: '3 mois', description: 'Prêt solidaire entre membres' }
  ];

  epargnes = [
    { id: 1, title: 'Épargne Sécurité', amount: 15000, duration: 'mensuel', description: 'Épargne de précaution' },
    { id: 2, title: 'Projet Familial', amount: 100000, duration: '6 mois', description: 'Épargne pour projets familiaux' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1000)]],
      duration: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemType = params['type'] || 'tontine';
      const itemId = parseInt(params['id'], 10);
      this.isNew = params['new'] === 'true';

      if (!this.isNew) {
        this.loadItem(this.itemType, itemId);
        this.setPageTitle();
      } else {
        this.pageTitle = 'Nouvelle Tontine';
      }
    });
  }

  loadItem(type: string, id: number) {
    switch (type) {
      case 'pret':
        this.currentItem = this.prets.find(p => p.id === id);
        break;
      case 'epargne':
        this.currentItem = this.epargnes.find(e => e.id === id);
        break;
      default:
        this.currentItem = this.tontines.find(t => t.id === id);
        break;
    }
  }

  setPageTitle() {
    switch (this.itemType) {
      case 'pret':
        this.pageTitle = 'Détails Prêt';
        break;
      case 'epargne':
        this.pageTitle = 'Détails Épargne';
        break;
      default:
        this.pageTitle = 'Détails Tontine';
        break;
    }
  }

  getItemIcon(): string {
    switch (this.itemType) {
      case 'pret': return 'cash-outline';
      case 'epargne': return 'wallet-outline';
      default: return 'people-outline';
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  saveTontine() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newId = this.tontines.length + 1;
    const newTontine = {
      id: newId,
      name: this.form.value.name,
      amount: this.form.value.amount,
      duration: this.form.value.duration,
      members: 1,
      description: 'Nouvelle tontine créée par l’utilisateur'
    };

    this.tontines.push(newTontine);

    this.router.navigate(['/details-tontine'], {
      queryParams: { type: 'tontine', id: newId }
    });
  }

  async joinItem() {
    if (!this.currentItem) return;

    if (!this.currentItem.members) {
      this.currentItem.members = 1;
    } else {
      this.currentItem.members += 1;
    }

    const toast = await this.toastController.create({
      message: `Vous avez rejoint cette ${this.itemType} avec succès !`,
      duration: 2000,
      color: 'success'
    });

    await toast.present();

    this.router.navigate(['/dashboard']);
  }
}
