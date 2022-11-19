import { Component, OnInit } from '@angular/core';
import { MasterDevice } from 'src/app/models/masterDevices.model';
import { MasterDevicesService } from '../../services/master-devices.service';

@Component({
  selector: 'app-master-devices',
  templateUrl: './master-devices.component.html',
  styles: [
  ]
})
export class MasterDevicesComponent implements OnInit {

  public mDevices: MasterDevice[] = [];
  public cargando: boolean = true;

  constructor( private mDevicesService: MasterDevicesService ) { }

  ngOnInit(): void {
    this.getMasterDevices();
  }


  getMasterDevices() {

    this.cargando = true;
    this.mDevicesService.getMasterDevice()
      .subscribe( (datos): any => {
        console.log(datos);
        this.cargando = false;
        this.mDevices = datos;
        console.log(this.mDevices);
      })
  }

}
