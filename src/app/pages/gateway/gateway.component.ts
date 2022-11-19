import { Component, OnInit } from '@angular/core';
import { Gateways } from 'src/app/models/gateways.model';
import { GatewaysService } from '../../services/gateways.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: []
})
export class GatewayComponent implements OnInit {

  public gateways: Gateways[] = [];
  public cargando: boolean = true;



  constructor( private gatewayService: GatewaysService ) { }

  ngOnInit(): void {
    this.getGateways();
  }

  getGateways() {

    this.cargando = true;
    this.gatewayService.getGateways()
      .subscribe( (datos): any => {
        console.log(datos);
        this.cargando = false;
        this.gateways = datos;
        console.log(this.gateways);
      })
  }
}
