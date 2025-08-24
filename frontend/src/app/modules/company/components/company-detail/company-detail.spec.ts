import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyDetailComponent } from './company-detail';
import { CompanyService } from '../../services/company';
import { Company } from '../../models/company.model';
import { MaterialModule } from '../../../shared/material.module';

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;
  let companyService: CompanyService;

  const mockCompany: Company = { id: 1, name: 'Company A', address: '123 Main St', taxId: '123-456', createdAt: new Date().toISOString() };

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (key: string) => '1',
      },
    },
  };

  beforeEach(async () => {
    const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['getCompanyById']);
    companyServiceSpy.getCompanyById.and.returnValue(of(mockCompany));

    await TestBed.configureTestingModule({
      declarations: [CompanyDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: CompanyService, useValue: companyServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailComponent);
    component = fixture.componentInstance;
    companyService = TestBed.inject(CompanyService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch company details on init', () => {
    fixture.detectChanges();
    expect(companyService.getCompanyById).toHaveBeenCalledWith(1);
    expect(component.company).toEqual(mockCompany);
    expect(component.isCompanyLoading).toBeFalse();
  });

  it('should handle error when fetching company details', () => {
    (companyService.getCompanyById as jasmine.Spy).and.returnValue(throwError(() => new Error('Not found')));
    fixture.detectChanges();
    expect(companyService.getCompanyById).toHaveBeenCalledWith(1);
    expect(component.company).toBeNull();
    expect(component.isCompanyLoading).toBeFalse();
  });
});
