import CustomerAddressChangedEvent from "../../customer/event/customer-address-changed.event";
import SendConsoleLogWhenCustomerAddressChanged from "../../customer/event/handler/print-when-customer-address-changed.handler";
import { SendConsoleLog1Handler, SendConsoleLog2Handler } from "../../customer/event/handler/print-when-customer-is-created.handler";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-mail-when-product-is-created.handler";
import EventDispatcher from "../event/event-dispatcher";

export default class EventRegisterService {

   dispacher = new EventDispatcher();
  
  constructor(){
    this.registerHandlers();
  }

  private  registerHandlers(){
    this.dispacher.register("CustomerCreatedEvent", new SendConsoleLog1Handler());
    this.dispacher.register("CustomerCreatedEvent", new SendConsoleLog2Handler());
    this.dispacher.register("CustomerAddressChangedEvent", new SendConsoleLogWhenCustomerAddressChanged());
    this.dispacher.register("ProductCreatedEvent", new SendEmailWhenProductIsCreatedHandler())
  }
}