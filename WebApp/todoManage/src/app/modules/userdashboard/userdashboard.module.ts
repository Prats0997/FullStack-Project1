import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    UserdashboardRoutingModule
  ]
})
export class UserdashboardModule { }
