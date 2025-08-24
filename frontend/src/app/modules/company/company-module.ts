import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing-module';
import { Company } from './company';
import { CompanyList } from './components/company-list/company-list';
import { SharedModule } from '../shared/shared-module';
import { CompanyDetail } from './components/company-detail/company-detail';


@NgModule({
  declarations: [
    Company,
    CompanyList,
    CompanyDetail
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
