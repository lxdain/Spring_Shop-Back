import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModalComponent } from '../customer-modal/customer-modal.component';

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

  constructor(private customersService: CustomersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  deleteCustomer(customerId: number, event: Event): void {
    event.preventDefault();

    this.customersService.deleteCustomer(customerId).subscribe(() => {
      this.customers = this.customers.filter(c => c.customerId !== customerId);
    });
  }

  openAddCustomerModal(event: Event) {
    event.preventDefault();
    const modalRef = this.modalService.open(CustomerModalComponent, {
      centered: true,
    });
  
    modalRef.result.then(
      (result) => {
        // Handle modal close (if needed)
      },
      (reason) => {
        // Handle modal dismissal (if needed)
      }
    );
  }  
}