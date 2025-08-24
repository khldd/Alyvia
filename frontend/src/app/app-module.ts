import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <--- Import HttpClientModule

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthModule } from './modules/auth/auth-module';
import { CoreModule } from './modules/core/core-module';
import { LayoutModule } from './modules/layout/layout-module';
import { SharedModule } from './modules/shared/shared-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <--- Add it to the imports array
    AuthModule,
    CoreModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
