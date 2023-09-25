import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-modal-edit',
  templateUrl: './product-modal-edit.component.html',
  styleUrls: [
    './product-modal-edit.component.css',
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
  ]
})
export class ProductModalEditComponent {
  @Input() productData!: Product;

  constructor(public activeModal: NgbActiveModal, private productsService: ProductsService) {}

  updateProduct(productId: number) {
    if (this.productData) {
      this.productsService.updateProduct(this.productData).subscribe(
        (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
          this.activeModal.close();
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}