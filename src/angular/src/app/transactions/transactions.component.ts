import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from './transaction.model'; // Import the Transaction model
import { TransactionsService } from './transactions.service'; // Import the TransactionsService

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: [
    './transactions.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/fontawesome-all.min.css',
    '../../assets/css/Animated-Pretty-Product-List-v12-Animated-Pretty-Product-List.css',
    '../../assets/css/Contact-Directory.css',
    '../../assets/css/Form.css',
    '../../assets/css/Manage-Users.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css'
  ],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionsService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  deleteTransaction(transactionId: number): void {
    this.transactionsService.deleteTransaction(transactionId).subscribe(() => {
      this.transactions = this.transactions.filter(
        (transaction) => transaction.id !== transactionId
      );
    });
  }
}