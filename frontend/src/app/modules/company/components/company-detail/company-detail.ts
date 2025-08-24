import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company';
import { Employee } from '../../../employee/models/employee.model'; // Import Employee model
import { EmployeeService } from '../../../employee/services/employee'; // Import Employee service

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.html',
  styleUrls: ['./company-detail.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  employees: Employee[] = [];
  isCompanyLoading = true;
  isEmployeesLoading = true;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private employeeService: EmployeeService // Inject EmployeeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const companyId = +id;
      // Fetch company details
      this.companyService.getCompanyById(companyId).subscribe({
        next: (data) => {
          this.company = data;
          this.isCompanyLoading = false;
        },
        error: (err) => {
          console.error('Failed to fetch company details', err);
          this.isCompanyLoading = false;
        }
      });

      // Fetch employees for this company
      this.employeeService.getEmployeesByCompany(companyId).subscribe({
        next: (data) => {
          this.employees = data;
          this.isEmployeesLoading = false;
        },
        error: (err) => {
          console.error('Failed to fetch employees', err);
          this.isEmployeesLoading = false;
        }
      });
    }
  }
}
