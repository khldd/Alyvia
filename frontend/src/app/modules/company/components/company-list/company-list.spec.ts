import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyListComponent } from './company-list';
import { CompanyService } from '../../services/company';
import { Company } from '../../models/company.model';
import { MaterialModule } from '../../../shared/material.module';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;
  let companyService: CompanyService;

  const mockCompanies: Company[] = [
    { id: 1, name: 'Company A', address: '123 Main St', taxId: '123-456', createdAt: new Date().toISOString() },
    { id: 2, name: 'Company B', address: '456 Oak Ave', taxId: '789-012', createdAt: new Date().toISOString() }
  ];

  beforeEach(async () => {
    const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['getCompanies']);
    companyServiceSpy.getCompanies.and.returnValue(of(mockCompanies));

    await TestBed.configureTestingModule({
      declarations: [CompanyListComponent],
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: CompanyService, useValue: companyServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyListComponent);
    component = fixture.componentInstance;
    companyService = TestBed.inject(CompanyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch companies on init', () => {
    expect(companyService.getCompanies).toHaveBeenCalled();
    expect(component.dataSource.length).toBe(2);
    expect(component.dataSource).toEqual(mockCompanies);
    expect(component.isLoading).toBeFalse();
  });
});
