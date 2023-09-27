export interface Transaction {
    id: number;
    customer: {
      customerImage: string;
      customerName: string;
    };
    product: {
      productName: string;
      productPrice: number;
    };
    quantity: number;
    saleDate: string;
    totalPrice: number;
}
  