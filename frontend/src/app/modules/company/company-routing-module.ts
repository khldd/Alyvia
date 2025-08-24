import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Company } from './company';

const routes: Routes = [{ path: '', component: Company }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
