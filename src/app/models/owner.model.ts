import { Person } from "./person.model";

export class Owner {
    constructor(
        public person_id: number,
        public person: Person,
    ) {

    }
}