import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/customer.model';

@Component({
  selector: 'app-customer-modal-edit',
  templateUrl: './customer-modal-edit.component.html',
  styleUrls: [
    './customer-modal-edit.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/fontawesome-all.min.css',
    '../../assets/fonts/font-awesome.min.css',
    '../../assets/fonts/fontawesome5-overrides.min.css',
    '../../assets/css/Animated-Pretty-Product-List-v12-Animated-Pretty-Product-List.css',
    '../../assets/css/Contact-Directory.css',
    '../../assets/css/Manage-Users.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css',
    '../../assets/css/Form.css',
    '../../assets/fonts/simple-line-icons.min.css'
  ],
})
export class CustomerModalEditComponent {
  @Input() customerData!: Customer;

  constructor(public activeModal: NgbActiveModal, private customersService: CustomersService) {}

  updateCustomer(customerId: number) {
    if (this.customerData) {
      this.customersService.updateCustomer(this.customerData).subscribe(
        (updatedCustomer) => {
          console.log('Customer updated:', updatedCustomer);
          this.activeModal.close();
        },
        (error) => {
          console.error('Error updating customer:', error);
        }
      );
    }
  }
}