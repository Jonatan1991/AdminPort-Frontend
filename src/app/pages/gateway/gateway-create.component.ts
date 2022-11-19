import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateways } from 'src/app/models/gateways.model';
import { MasterDevice } from 'src/app/models/masterDevices.model';
import { GatewaysService } from 'src/app/services/gateways.service';
import { MasterDevicesService } from '../../services/master-devices.service';

@Component({
  selector: 'app-gateway-create',
  templateUrl: './gateway-create.component.html',
  styles: [
  ]
})
export class GatewayCreateComponent implements OnInit {

  public gatewayForm!: FormGroup;
  public masterDevices: MasterDevice[] = [];
  public gatewaySelected!: Gateways;

  constructor(private gatewayService: GatewaysService,
              private masterDeviceService: MasterDevicesService,
              public fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gatewayForm = this.fb.group({
      name: ['', Validators.required],
      ip: ['', Validators.required],
      masterDevice: ['', Validators.required],
      state: [''],
    });

    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      if (id !== 'crear') {
        // this.getGateway(id);
      }
    });
  }

}
