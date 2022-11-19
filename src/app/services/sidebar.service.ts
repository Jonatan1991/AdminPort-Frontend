import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    // {
    //   titulo: 'Dashboard',
    //   icono: 'mdi mdi-gauge',
    //   submenu: [
    //     { titulo: 'Main', url: '/' },
    //     { titulo: 'Gráficas', url: 'grafica1' },
    //     { titulo: 'rxjs', url: 'rxjs' },
    //     { titulo: 'Promesas', url: 'promesas' },
    //     { titulo: 'ProgressBar', url: 'progress' },
    //   ]
    // },

    {
      titulo: 'Administration',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Gateways', url: 'gateways' },
        { titulo: 'Peripheral Devices', url: 'peripheralDevices' },
        { titulo: 'Master Devices', url: 'masterDevices' },
      ]
    },
  ];

  constructor() { }
}
