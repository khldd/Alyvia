import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <--- Import ReactiveFormsModule
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // <--- Add it to the imports array
    RouterModule
  ]
})
export class AuthModule { }
