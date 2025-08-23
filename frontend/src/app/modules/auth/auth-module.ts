import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { Register } from './components/register/register';



@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
