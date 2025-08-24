import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module'; // <-- Import SharedModule
import { Layout } from './components/layout/layout';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,    // <-- Add RouterModule
    SharedModule,
    // <-- Add SharedModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
