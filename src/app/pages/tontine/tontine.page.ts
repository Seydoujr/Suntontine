import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tontine',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tontine.page.html',
  styleUrls: ['./tontine.page.scss'],
})
export class TontinePage {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
