import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'; // <--- Import new providers

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthModule } from './modules/auth/auth-module';
import { CoreModule } from './modules/core/core-module';
import { LayoutModule } from './modules/layout/layout-module';
import { SharedModule } from './modules/shared/shared-module';
import { jwtInterceptor } from './modules/core/interceptors/jwt-interceptor';
import {CompanyListComponent} from './modules/company/components/company-list/company-list';
import {CompanyDetailComponent} from './modules/company/components/company-detail/company-detail';
import {EmployeeListComponent} from './modules/employee/components/employee-list/employee-list';
import {EmployeeFormComponent} from './modules/employee/components/employee-form/employee-form';
import {Login} from './modules/auth/components/login/login';
import {Register} from './modules/auth/components/register/register';
import {Layout} from './modules/layout/components/layout/layout';
import {ReactiveFormsModule} from '@angular/forms'; // <--- Import the interceptor

@NgModule({
  declarations: [
    App,
    CompanyListComponent,
    CompanyDetailComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    Login,
    Register,
    Layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Keep this for now for simplicity
    AuthModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])) // <--- Provide the interceptor
  ],
  bootstrap: [App]
})
export class AppModule { }
