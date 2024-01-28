import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import EventInterface from "../../../@shared/event/event.interface";
import CustomerCreatedEvent from "../customer-created.event";

export class SendConsoleLog1Handler implements EventHandlerInterface<CustomerCreatedEvent> {
  
   handle(event: EventInterface){
     console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}

export class SendConsoleLog2Handler implements EventHandlerInterface {
  
   handle(event: EventInterface){
     console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
} 