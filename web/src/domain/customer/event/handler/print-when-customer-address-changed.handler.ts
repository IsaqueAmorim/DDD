import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import EventInterface from "../../../@shared/event/event.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class SendConsoleLogWhenCustomerAddressChanged implements EventHandlerInterface<CustomerAddressChangedEvent> {
  
  handle(event: EventInterface) {
    console.log(`
     Endereço do cliente: 
     ${event.eventData.id},
     ${event.eventData.name}
     alterado para: 
     ${event.eventData.street},
     ${event.eventData.number},
     ${event.eventData.city},
     ${event.eventData.cep}`);
  }
}