import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing-module';
// Corrected import names below
import { CompanyListComponent } from './components/company-list/company-list';
import { CompanyDetailComponent } from './components/company-detail/company-detail';
import { SharedModule } from '../shared/shared-module';
import { EmployeeModule } from '../employee/employee-module';

@NgModule({
  declarations: [
    // Use the corrected class names

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    EmployeeModule
  ]
})
export class CompanyModule { }
