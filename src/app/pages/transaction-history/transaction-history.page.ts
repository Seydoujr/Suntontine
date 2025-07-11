import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './transaction-history.page.html',
  styleUrls: ['./transaction-history.page.scss'],
})
export class TransactionHistoryPage {
  searchTerm: string = '';
  selectedDate: string = '';

  transactions = [
    {
      id: 'TXN001',
      date: '2025-07-05',
      type: 'Dépôt',
      amount: 25000,
      status: 'Succès',
    },
    {
      id: 'TXN002',
      date: '2025-07-03',
      type: 'Retrait',
      amount: 10000,
      status: 'Échoué',
    },
    {
      id: 'TXN003',
      date: '2025-07-01',
      type: 'Transfert',
      amount: 15000,
      status: 'Succès',
    },
  ];

  get filteredTransactions() {
    return this.transactions.filter((tx) => {
      const matchesSearch =
        this.searchTerm === '' ||
        tx.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        tx.type.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesDate =
        this.selectedDate === '' || tx.date === this.selectedDate;

      return matchesSearch && matchesDate;
    });
  }
}
