import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    const url = `${this.apiUrl}/customers/all`;
    return this.http.get<Customer[]>(url);
  }

  deleteCustomer(customerId: number): Observable<void> {
    const url = `${this.apiUrl}/customers/delete/${customerId}`;
    return this.http.delete<void>(url);
  }
}