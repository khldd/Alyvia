import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // IMPORTANT: Adjust this URL to match your actual backend endpoint
  private apiUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  // This assumes an endpoint like /employees?companyId=...
  getEmployeesByCompany(companyId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}`, { params: { companyId: companyId.toString() } });
  }
}
