import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  getEmployeesByCompany(companyId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl, { params: { companyId: companyId.toString() } });
  }

  // Add a new method to create an employee
  addEmployee(employeeData: Partial<Employee>): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employeeData);
  }
}
