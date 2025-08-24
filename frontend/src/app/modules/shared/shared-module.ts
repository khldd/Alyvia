import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule // <-- Add to imports
  ],
  exports: [
    MaterialModule // <-- Also export it here
  ]
})
export class SharedModule { }
