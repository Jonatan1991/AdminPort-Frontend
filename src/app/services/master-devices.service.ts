import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MasterDevice } from '../models/masterDevices.model';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class MasterDevicesService {

  constructor(private http: HttpClient) { }

  getMasterDevice() {
    const url = `${base_url}/masterDevices`;
    return this.http.get<MasterDevice[]>(url)
    .pipe(
      map( (resp: any) => resp.masterDevices));

  }
}
