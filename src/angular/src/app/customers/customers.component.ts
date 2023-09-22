import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: [
    './customers.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/fontawesome-all.min.css',
    '../../assets/fonts/font-awesome.min.css',
    '../../assets/fonts/fontawesome5-overrides.min.css',
    '../../assets/css/Animated-Pretty-Product-List-v12-Animated-Pretty-Product-List.css',
    '../../assets/css/Contact-Directory.css',
    '../../assets/css/Manage-Users.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css'
  ]
})
export class CustomersComponent implements OnInit {
  customers: any[] = []; // Declare and initialize the customers property as an empty array

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    // Call your service method to fetch customers and assign the result to the customers property
    this.customersService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
