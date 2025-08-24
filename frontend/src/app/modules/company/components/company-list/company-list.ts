import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.html',
  styleUrls: ['./company-list.css']
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'taxId', 'createdAt'];
  dataSource: Company[] = [];
  isLoading = true;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.dataSource = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch companies', err);
        this.isLoading = false;
        // Optionally, show an error message to the user
      }
    });
  }
}
