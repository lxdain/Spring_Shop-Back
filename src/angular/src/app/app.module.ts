import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerModalComponent } from './customers/customer-modal/customer-modal.component';

// Import the CustomersService
import { CustomersService } from './customers/customers.service';
import { CustomerModalEditComponent } from './customers/customer-modal-edit/customer-modal-edit.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { ProductModalEditComponent } from './products/product-modal-edit/product-modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    TransactionsComponent,
    ProductsComponent,
    CustomersComponent,
    CustomerModalComponent,
    CustomerModalEditComponent,
    ProductModalComponent,
    ProductModalEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }