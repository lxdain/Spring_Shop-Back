import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiUrl: string = 'http://localhost:8080';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    const url = `${this.apiUrl}/sales/all`;
    return this.http.get<Transaction[]>(url);
  }

  deleteTransaction(transactionId: number): Observable<void> {
    const url = `${this.apiUrl}/sales/delete/${transactionId}`;
    return this.http.delete<void>(url);
  }
}
