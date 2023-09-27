import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { TransactionsService } from '../transactions/transactions.service';
import { CustomersService } from '../customers/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css',
    '../../assets/fonts/fontawesome-all.min.css',
  ],
})
export class DashboardComponent implements OnInit {
  totalCustomers: number = 0;
  totalEarnings: number = 0;
  totalProducts: number = 0;
  totalTransactions: number = 0;

  constructor(private productsService: ProductsService, private transactionsService: TransactionsService, private customersService: CustomersService) {}

  ngOnInit(): void {
    this.calculateDashboardData();
  }

  calculateDashboardData(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.totalProducts = products.length;
    });

    this.transactionsService.getTransactions().subscribe((transactions) => {
      this.totalTransactions = transactions.length;

      this.totalEarnings = transactions.reduce((total, transaction) => {
        return total + transaction.totalPrice;
      }, 0);
    });

    this.customersService.getCustomers().subscribe((customers) => {
      this.totalCustomers = customers.length;
    });
  }
}