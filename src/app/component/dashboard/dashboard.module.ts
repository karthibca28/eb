import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
