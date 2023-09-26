import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service'; // Import the TransactionsService
import { Product } from '../products/product.model';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: [
    './transactions.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css',
    '../../assets/fonts/fontawesome-all.min.css',
  ],
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = []; // Define an array to store transactions data

  constructor(private transactionsService: TransactionsService, private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadSales(); // Call the function to load transactions data on component initialization
  }

  loadSales(): void {
    this.transactionsService.getAllSales().subscribe((data) => {
      this.transactions = data; // Assign the fetched transactions data to the component's property
    });
  }

  deleteSale(id: number): void {
    if (confirm('Are you sure you want to delete this transaction?')) {
      this.transactionsService.deleteSale(id).subscribe(() => {
        // After successful deletion, remove the transaction from the displayed list
        this.transactions = this.transactions.filter((transaction) => transaction.id !== id);
      });
    }
  }
}
