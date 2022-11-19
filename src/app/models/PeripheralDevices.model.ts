import { Gateways } from "./gateways.model";


export class PeripheralDevice {
  constructor(
    public id: string,
    public name: string,
    public vendor: string,
    public date: string,
    public state: boolean,
    public gateway: Gateways
  ) {}
}
