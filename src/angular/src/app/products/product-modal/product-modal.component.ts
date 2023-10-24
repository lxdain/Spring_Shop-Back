import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: [
    './product-modal.component.css',
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
export class ProductModalComponent {
  newProduct: Product = {
    productId: 0,
    productName: '',
    productDescription: '',
    productImage: '',
    productPrice: 0,
  };

  constructor(public activeModal: NgbActiveModal, private productsService: ProductsService) {}

  saveProduct() {
    console.log('New Product:', this.newProduct);
    this.productsService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product added:', response);
        this.activeModal.close();
        window.location.reload();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}