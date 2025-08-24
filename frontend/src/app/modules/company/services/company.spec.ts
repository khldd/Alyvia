import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyService } from './company';
import { Company } from '../models/company.model';

describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompanyService]
    });
    service = TestBed.inject(CompanyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch companies from the API via GET', () => {
    const dummyCompanies: Company[] = [
      { id: 1, name: 'Company A', address: '123 Main St', taxId: '123-456', createdAt: new Date().toISOString() },
      { id: 2, name: 'Company B', address: '456 Oak Ave', taxId: '789-012', createdAt: new Date().toISOString() }
    ];

    service.getCompanies().subscribe(companies => {
      expect(companies.length).toBe(2);
      expect(companies).toEqual(dummyCompanies);
    });

    const request = httpMock.expectOne('http://localhost:8080/companies');
    expect(request.request.method).toBe('GET');
    request.flush(dummyCompanies);
  });
});
