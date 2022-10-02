import {Entity} from "@/interfaces/entity";

export class Customer implements Entity {
    id: number;
    name: string;

    constructor(id = 0, name = '') {
        this.id = id;
        this.name = name;
    }
}
