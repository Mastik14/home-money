import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<any> {
    return this.http.get('http://localhost:3000/bill');
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(`http://api.fixer.io/latest?base=${base}`);
  }
}
