import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'; // <--- Import new providers

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthModule } from './modules/auth/auth-module';
import { CoreModule } from './modules/core/core-module';
import { LayoutModule } from './modules/layout/layout-module';
import { SharedModule } from './modules/shared/shared-module';
import { jwtInterceptor } from './modules/core/interceptors/jwt-interceptor'; // <--- Import the interceptor

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Keep this for now for simplicity
    AuthModule,
    CoreModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])) // <--- Provide the interceptor
  ],
  bootstrap: [App]
})
export class AppModule { }
