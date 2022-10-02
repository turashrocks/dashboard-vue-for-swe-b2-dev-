import {Customer} from "@/classes/customer";
import {Entity} from "@/interfaces/entity";

export class Sale implements Entity {
    id: number;
    name: string;
    batch_name: string;
    customer: Customer;

    constructor(id = 0, name = '', batch_name = '',customer = new Customer()) {
        this.id = id;
        this.name = name;
        this.batch_name = batch_name;
        this.customer = customer;
    }

    // get name() {
    //     return this.name;
    // }

    // canView(page: string) {
    //     return this.permissions.some(p => p === `view_${page}`);
    // }

    // canEdit(page: string) {
    //     return this.permissions.some(p => p === `edit_${page}`);
    // }
}
