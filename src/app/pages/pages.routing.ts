import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GatewayComponent } from './gateway/gateway.component';
import { PeripheralDevicesComponent } from './peripheral-devices/peripheral-devices.component';
import { MasterDevicesComponent } from './master-devices/master-devices.component';
import { GatewayCreateComponent } from './gateway/gateway-create.component';
import { PeripheralDeviceCreateComponent } from './peripheral-devices/peripheral-device-create.component';
import { MasterDeviceCreateComponent } from './master-devices/master-device-create.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },

      {
        path: 'gateways',
        component: GatewayComponent,
        data: { titulo: 'Gateways' },
      },
      {
        path: 'gateway/:id',
        component: GatewayCreateComponent,
        data: { titulo: 'Gateways' },
      },

      {
        path: 'peripheralDevices',
        component: PeripheralDevicesComponent,
        data: { titulo: 'Peripheral Devices' },
      },
      {
        path: 'peripheralDevice/:id',
        component: PeripheralDeviceCreateComponent,
        data: { titulo: 'Peripheral Devices' },
      },

      {
        path: 'masterDevices',
        component: MasterDevicesComponent,
        data: { titulo: 'Master Devices' },
      },
      {
        path: 'masterDevice/:id',
        component: MasterDeviceCreateComponent,
        data: { titulo: 'Master Devices' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
