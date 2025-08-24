import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.html',
  styleUrls: ['./company-detail.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.getCompanyById(+id).subscribe({
        next: (data) => {
          this.company = data;
          this.isLoading = false;
          // Here you would also fetch the list of employees for this company
        },
        error: (err) => {
          console.error('Failed to fetch company details', err);
          this.isLoading = false;
        }
      });
    }
  }
}
