import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gateways } from '../models/gateways.model';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class GatewaysService {
  constructor(private http: HttpClient) {}

  getGateways() {
    const url = `${base_url}/gateway`;
    return this.http.get<Gateways[]>(url)
    .pipe(
      map( (resp: any) => resp.gateway));

  }

  createGateway( gateway: Gateways ){
    const name = gateway.name;
    const ip = gateway.ip;
    const masterDevice = gateway.masterDevice;
    const url = `${ base_url}/gateway/`;
    return  this.http.post(url, {name, ip, masterDevice})
  }

  updateGateway(id: string, name: string, ip: string, state: boolean, masterDevice: string ){
    const url = `${ base_url}/gateway/${ id }`;
    return  this.http.put(url, {name, ip, state, masterDevice})
  }

  deleteGateway( id: string ){
    const url = `${ base_url}/gateway/${ id }`;
    return  this.http.delete(url)
  }

  getGateway( id: string){
    const url = `${ base_url}/gateway/${ id }`;
    return  this.http.get<Gateways[]>(url)
  }
}
