import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ProductModalEditComponent } from '../product-modal-edit/product-modal-edit.component';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    './products.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/fontawesome-all.min.css',
    '../../assets/fonts/font-awesome.min.css',
    '../../assets/fonts/fontawesome5-overrides.min.css',
    '../../assets/css/Animated-Pretty-Product-List-v12-Animated-Pretty-Product-List.css',
    '../../assets/css/Contact-Directory.css',
    '../../assets/css/Manage-Users.css',
    '../../assets/css/Team-Horizontal-icons.css',
    '../../assets/css/Team-Horizontal-images.css',
  ]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  @Input() customers: any[] = []; // Input to receive customers data

  constructor(private productsService: ProductsService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(productId: number, event: Event): void {
    event.preventDefault();

    this.productsService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(p => p.productId !== productId); // ovde je bilo (p) =>
    });
  }

  editProduct(productId: number): void {
    console.log('Editing product with ID:', productId);
  }

  openAddProductModal(event: Event) {
    event.preventDefault();
    const modalRef = this.modalService.open(ProductModalComponent, {
      centered: true,
    });

    modalRef.result.then(
      (result) => {
        if (result === 'saved') {
          this.loadProducts();
        }
      },
      (reason) => {}
    );
  }

  openEditModal(productId: number): void {
    console.log('Opening edit modal for product ID:', productId);
    this.selectedProduct = this.products.find((product) => product.productId === productId) || null; // ovde je bilo (p) =>
    const modalRef = this.modalService.open(ProductModalEditComponent);
    modalRef.componentInstance.productData = this.selectedProduct;
  }
}