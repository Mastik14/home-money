import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<any> {
    return this.http.get('http://localhost:3000/bill');
  }

  getCurrency(): Observable<any> {
    return this.http.get('http://data.fixer.io/api/latest?access_key=4de6b5b81fa59a5a4c621ef48a884e8b');
  }
}
