import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: [
    './customer-modal.component.css',
    '../../../assets/bootstrap/css/bootstrap.min.css',
    '../../../assets/fonts/fontawesome-all.min.css',
    '../../../assets/fonts/font-awesome.min.css',
    '../../../assets/fonts/fontawesome5-overrides.min.css',
    '../../../assets/css/Animated-Pretty-Product-List-v12-Animated-Pretty-Product-List.css',
    '../../../assets/css/Contact-Directory.css',
    '../../../assets/css/Manage-Users.css',
    '../../../assets/css/Team-Horizontal-icons.css',
    '../../../assets/css/Team-Horizontal-images.css',
    '../../../assets/css/Form.css',
    '../../../assets/fonts/simple-line-icons.min.css'
  ]
})
export class CustomerModalComponent {
  newCustomer: Customer = {
    customerId: 0,
    customerImage: '',
    customerName: '',
    customerDob: new Date(),
    customerAddress: '',
    customerPhone: '',
    customerEmail: '',
    customerCreditCard: ''
  };

  constructor(public activeModal: NgbActiveModal, private customersService: CustomersService) {}

  saveCustomer() {
    console.log('New Customer:', this.newCustomer);
    this.customersService.addCustomer(this.newCustomer).subscribe(
      (response) => {
        console.log('Customer added:', response);
        this.activeModal.close();
        window.location.reload();
      },
      (error) => {
        console.error('Error adding customer:', error);
      }
    );
  }
}