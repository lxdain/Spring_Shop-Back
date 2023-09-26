import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllSales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sales/all`);
  }

  deleteSale(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/sales/delete/${id}`);
  }

  addSale(saleData: any): Observable<any> {
    const url = `${this.apiUrl}/sales/add`;
    return this.http.post(url, saleData);
  }
}
