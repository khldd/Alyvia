import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing-module';
import { CompanyListComponent } from './components/company-list/company-list';
import { CompanyDetailComponent } from './components/company-detail/company-detail';
import { SharedModule } from '../shared/shared-module';
import { EmployeeModule } from '../employee/employee-module'; // <-- Import EmployeeModule

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    EmployeeModule // <-- Add it to imports
  ]
})
export class CompanyModule { }
