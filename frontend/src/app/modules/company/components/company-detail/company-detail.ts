import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company';
import { Employee } from '../../../employee/models/employee.model';
import { EmployeeService } from '../../../employee/services/employee';
import { EmployeeFormComponent } from '../../../employee/components/employee-form/employee-form'; // Import the form component

@Component({
  selector: 'app-company-detail',
  standalone: false,
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
    private employeeService: EmployeeService,
    public dialog: MatDialog // Inject MatDialog
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

  openAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      data: { companyId: this.company?.id } // Pass the companyId to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If a new employee was created, add it to the list to update the UI instantly
        this.employees = [...this.employees, result];
      }
    });
  }
}
