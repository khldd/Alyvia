import { NgModule } from '@angular/core';

// ... other imports
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  exports: [
    // ... other exports
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
