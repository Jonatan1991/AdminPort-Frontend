import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GatewayComponent } from './gateway/gateway.component';
import { PeripheralDevicesComponent } from './peripheral-devices/peripheral-devices.component';
import { MasterDevicesComponent } from './master-devices/master-devices.component';
import { MasterDeviceCreateComponent } from './master-devices/master-device-create.component';
import { GatewayCreateComponent } from './gateway/gateway-create.component';
import { PeripheralDeviceCreateComponent } from './peripheral-devices/peripheral-device-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    GatewayComponent,
    PeripheralDevicesComponent,
    MasterDevicesComponent,
    MasterDeviceCreateComponent,
    GatewayCreateComponent,
    PeripheralDeviceCreateComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    GatewayComponent,
    PeripheralDevicesComponent,
    MasterDevicesComponent,
    MasterDeviceCreateComponent,
    GatewayCreateComponent,
    PeripheralDeviceCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
