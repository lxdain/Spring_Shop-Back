export interface Product {
    productId: number;
    productName: string;
    productDescription: string;
    productImage: string;
    productPrice: number;
}

export class ProductModel implements Product {
    productId: number;
    productName: string;
    productDescription: string;
    productImage: string;
    productPrice: number;

    constructor(product: Product) {
        this.productId = product.productId;
        this.productName = product.productName;
        this.productDescription = product.productDescription;
        this.productImage = product.productImage;
        this.productPrice = product.productPrice;
    }

    getProductId(): number {
        return this.productId;
    }

    getProductName(): string {
        return this.productName;
    }

    getProductDescription(): string {
        return this.productDescription;
    }

    getProductImage(): string {
        return this.productImage;
    }

    getProductPrice(): number {
        return this.productPrice;
    }
}