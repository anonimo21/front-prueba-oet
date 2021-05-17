import { Driver } from "./driver.model";
import { Owner } from "./owner.model";
import { Tipo } from "./tipo.model";

export class Vehiculo {
    constructor(
        public id: number,
        public placa: string,
        public color: string,
        public marca: string,
        public type_id?: Tipo,
        public driver_id?: Driver,
        public owner_id?: Owner,
        // public type_id: number,
        // public driver_id: number,
        // public owner_id: number,
    ) {

    }
}