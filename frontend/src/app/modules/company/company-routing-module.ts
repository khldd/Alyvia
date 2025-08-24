import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list';
import { CompanyDetailComponent } from './components/company-detail/company-detail'; // Import the new component

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: ':id', // Add route for a specific company ID
    component: CompanyDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
