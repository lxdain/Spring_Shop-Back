import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model'; // Import your customer model if you have one

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl: string = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to fetch a list of customers
  getCustomers(): Observable<Customer[]> {
    const url = `${this.apiUrl}/customers/all`; // Adjust the URL as per your API endpoints
    return this.http.get<Customer[]>(url);
  }
}