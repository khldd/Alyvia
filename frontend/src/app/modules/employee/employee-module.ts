import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { SharedModule } from '../shared/shared.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent // Declare the new component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule // Import ReactiveFormsModule
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
