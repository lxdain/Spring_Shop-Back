export interface Customer {
  customerId: number;
  customerImage: string;
  customerName: string;
  customerDob: Date;
  customerAddress: string;
  customerPhone: string;
  customerEmail: string;
  customerCreditCard: string;
}

export class CustomerModel implements Customer {
  customerId: number;
  customerImage: string;
  customerName: string;
  customerDob: Date;
  customerAddress: string;
  customerPhone: string;
  customerEmail: string;
  customerCreditCard: string;
  
  constructor(customer: Customer) {
    this.customerId = customer.customerId;
    this.customerImage = customer.customerImage;
    this.customerName = customer.customerName;
    this.customerDob = customer.customerDob;
    this.customerAddress = customer.customerAddress;
    this.customerPhone = customer.customerPhone;
    this.customerEmail = customer.customerEmail;
    this.customerCreditCard = customer.customerCreditCard;
  }
  
  getCustomerId(): number {
    return this.customerId;
  }

  getCustomerImage(): string {
    return this.customerImage;
  }

  getCustomerName(): string {
    return this.customerName;
  }

  getCustomerDob(): Date {
    return this.customerDob;
  }

  getCustomerDobAsString(): string {
    return this.customerDob.toLocaleDateString();
  }

  getCustomerAddress(): string {
    return this.customerAddress;
  }

  getCustomerPhone(): string {
    return this.customerPhone;
  }

  getCustomerEmail(): string {
    return this.customerEmail;
  }

  getCustomerCreditCard(): string {
    return this.customerCreditCard
  }
}