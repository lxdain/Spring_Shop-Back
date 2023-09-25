import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = 'http://localhost:8080';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/products/all`;
    return this.http.get<Product[]>(url);
  }

  getProductById(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/products/search/${productId}`;
    return this.http.get<Product>(url);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/products/delete/${productId}`;
    return this.http.delete<void>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/products/add`;
    return this.http.post<Product>(url, product, { headers: this.headers });
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/products/update/${product.productId}`;
    return this.http.put<Product>(url, product, { headers: this.headers });
  }
}