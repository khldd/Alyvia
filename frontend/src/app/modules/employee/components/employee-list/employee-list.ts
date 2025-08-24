import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
  @Input() isLoading = true;

  displayedColumns: string[] = ['name', 'email', 'baseSalary', 'status'];
}
