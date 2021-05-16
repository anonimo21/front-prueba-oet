import { Person } from "./person.model";

export class Driver {
    constructor(
        public person_id: number,
        public person: Person,
    ) {

    }
}