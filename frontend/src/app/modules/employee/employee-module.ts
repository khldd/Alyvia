import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { SharedModule } from '../shared/shared.module'; // Import SharedModule for Material components

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule // Add SharedModule here
  ],
  exports: [
    EmployeeListComponent // Export the component so other modules can use it
  ]
})
export class EmployeeModule { }
