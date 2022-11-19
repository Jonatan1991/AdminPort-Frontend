// interface _HospitalUser {
//     _id: string;
//     nombre: string;
//     img: string;
// }

import { MasterDevice } from "./masterDevices.model";


export class Gateways {

    constructor(
        public _id: string,
        public name: string,
        public ip: string,
        public state: boolean,
        public masterDevice: MasterDevice,
    ) {}

}

