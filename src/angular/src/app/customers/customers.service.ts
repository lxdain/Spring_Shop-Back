import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private apiUrl: string = 'http://localhost:8080';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    const url = `${this.apiUrl}/customers/all`;
    return this.http.get<Customer[]>(url);
  }

  getCustomerById(customerId: number): Observable<Customer> {
    const url = `${this.apiUrl}/customers/search/${customerId}`;
    return this.http.get<Customer>(url);
  }
  

  deleteCustomer(customerId: number): Observable<void> {
    const url = `${this.apiUrl}/customers/delete/${customerId}`;
    return this.http.delete<void>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/customers/add`;
    return this.http.post<Customer>(url, customer, { headers: this.headers });
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/customers/update/${customer.customerId}`;
    return this.http.put<Customer>(url, customer, { headers: this.headers });
  }
}