import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TeachersService} from './shared/services/teachers.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './shared/helpers/jwt.interceptor';
import {ErrorInterceptor} from './shared/helpers/error.interceptor';
import { AlertComponent } from './shared/directives/alert/alert.component';
import {UserService} from './shared/services/user-service.service';
import {AlertService} from './shared/services/alert.service';
import {StudentsService} from './shared/services/students.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TeachersService,
    StudentsService,
    UserService,
    AlertService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},


  ],
  bootstrap: [AppComponent],
  exports:
    [FormsModule]
})
export class AppModule {
}
