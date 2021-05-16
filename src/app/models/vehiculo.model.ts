import { Driver } from "./driver.model";
import { Owner } from "./owner.model";
import { Tipo } from "./tipo.model";

export class Vehiculo {
    constructor(
        public id: number,
        public placa: string,
        public colo: string,
        public marca: string,
        public tipo: Tipo,
        public driver: Driver,
        public owner: Owner,
    ) {

    }
}