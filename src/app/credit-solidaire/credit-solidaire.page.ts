import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-credit-solidaire',
  templateUrl: './credit-solidaire.page.html',
  styleUrls: ['./credit-solidaire.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreditSolidairePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
