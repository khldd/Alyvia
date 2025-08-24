import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number }
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      baseSalary: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployeeData = {
        ...this.employeeForm.value,
        company: { id: this.data.companyId } // Nest companyId as required by the backend
      };

      this.employeeService.addEmployee(newEmployeeData).subscribe({
        next: (newEmployee) => {
          this.dialogRef.close(newEmployee); // Close the dialog and return the new employee
        },
        error: (err) => {
          console.error('Failed to add employee', err);
          // Optionally, display an error inside the dialog
        }
      });
    }
  }
}
