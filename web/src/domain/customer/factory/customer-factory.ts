import Customer from "../entity/customer";
import {v4 as uuid} from "uuid"
import Address from "../value-objects/address";
import EventRegisterService from "../../@shared/service/event-injection.service";
import CustomerCreatedEvent from "../event/customer-created.event";

export default class CustomerFactory {

    private static events = new EventRegisterService();

    public static create(name: string): Customer {
        const customer = new Customer(uuid(),name);
        const event = new CustomerCreatedEvent({id: customer.id});

        this.events.dispacher.notify(event);
        return customer;
    };

    public static createWithAddress(name: string, address: Address): Customer{
        const customer = new Customer(uuid(),name);
        customer.changeAddress(address);
        const event = new CustomerCreatedEvent({id: customer.id});

        this.events.dispacher.notify(event);
        return customer;
    }
}
