import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './components/layout/layout';



@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Layout
  ]
})
export class LayoutModule { }
