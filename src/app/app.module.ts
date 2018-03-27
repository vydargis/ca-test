import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegisterLayoutComponent } from './register-layout/register-layout.component';
import { Registration1Component } from './registration-1/registration-1.component';
import { Registration2Component } from './registration-2/registration-2.component';
import { Registration3Component } from './registration-3/registration-3.component';
import { Registration4Component } from './registration-4/registration-4.component';
import { Registration5Component } from './registration-5/registration-5.component';
import { Registration6Component } from './registration-6/registration-6.component';
import { Registration7Component } from './registration-7/registration-7.component';
import { Registration8Component } from './registration-8/registration-8.component';
import { ChangePassword1Component } from './change-password-1/change-password-1.component';
import { ChangePassword2Component } from './change-password-2/change-password-2.component';
import { ChangePassword3Component } from './change-password-3/change-password-3.component';
import { ChangePassword5Component } from './change-password-5/change-password-5.component';
import { ChangePassword4Component } from './change-password-4/change-password-4.component';
import { CampusPassword1Component } from './campus-password-1/campus-password-1.component';
import { CampusPassword2Component } from './campus-password-2/campus-password-2.component';
import { CampusPassword3Component } from './campus-password-3/campus-password-3.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterLayoutComponent,
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    Registration5Component,
    Registration6Component,
    Registration7Component,
    Registration8Component,
    ChangePassword1Component,
    ChangePassword2Component,
    ChangePassword3Component,
    ChangePassword5Component,
    ChangePassword4Component,
    CampusPassword1Component,
    CampusPassword2Component,
    CampusPassword3Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
