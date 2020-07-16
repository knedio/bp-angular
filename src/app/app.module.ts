import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '_core/core.module';

import { LoginComponent } from './_pages/login/login.component';
import { HomeComponent } from './_pages/home/home.component';
import { DefaultLayoutComponent } from './_layouts/default-layout/default-layout.component';
import { LoginFormComponent } from './_shared/components/form/modules/login-form/login-form.component';
import { FormErrorMessageComponent } from './_shared/components/form/form-error-message/form-error-message.component';
import { FormInputFieldComponent } from './_shared/components/form/form-input-field/form-input-field.component';
import { ButtonComponent } from './_shared/components/button/button.component';
import { TableComponent } from './_shared/components/table/table.component';
import { DynamicRowComponent } from './_shared/components/table/dynamic-row/dynamic-row/dynamic-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DefaultLayoutComponent,
    LoginFormComponent,
    FormErrorMessageComponent,
    FormInputFieldComponent,
    ButtonComponent,
    TableComponent,
    DynamicRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
