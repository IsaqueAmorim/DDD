import CustomerAddressChangedEvent from "../../customer/event/customer-address-changed.event";
import CustomerCreatedEvent from "../../customer/event/customer-created.event";
import SendConsoleLogWhenCustomerAddressChanged from "../../customer/event/handler/print-when-customer-address-changed.handler";
import { SendConsoleLog1Handler,SendConsoleLog2Handler } from "../../customer/event/handler/print-when-customer-is-created.handler";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-mail-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
    it("should register an event handler", () => {
      const eventDispatcher = new EventDispatcher();
      const eventHandler = new SendEmailWhenProductIsCreatedHandler();
  
      eventDispatcher.register("ProductCreatedEvent", eventHandler);
  
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"]
      ).toBeDefined();
      expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
        1
      );
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
      ).toMatchObject(eventHandler);
    });
  
    it("should unregister an event handler", () => {
      const eventDispatcher = new EventDispatcher();
      const eventHandler = new SendEmailWhenProductIsCreatedHandler();
  
      eventDispatcher.register("ProductCreatedEvent", eventHandler);
  
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
      ).toMatchObject(eventHandler);
  
      eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
  
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"]
      ).toBeDefined();
      expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
        0
      );
    });
  
    it("should unregister all event handlers", () => {
      const eventDispatcher = new EventDispatcher();
      const eventHandler = new SendEmailWhenProductIsCreatedHandler();
  
      eventDispatcher.register("ProductCreatedEvent", eventHandler);
  
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
      ).toMatchObject(eventHandler);
  
      eventDispatcher.unregisterAll();
  
      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"]
      ).toBeUndefined();
    });
  
    it("should notify all event handlers", () => {
      const eventDispatcher = new EventDispatcher();
      const sendEmailWhenProductIsCreatedHandler = new SendEmailWhenProductIsCreatedHandler();
      const sendConsoleLog1Handler = new SendConsoleLog1Handler();
      const sendConsoleLog2Handler = new SendConsoleLog2Handler();
      const sendConsoleLogWhenCustomerAddressChanged = new SendConsoleLogWhenCustomerAddressChanged();


      const spySendEmailWhenProductIsCreatedHandler = jest.spyOn(sendEmailWhenProductIsCreatedHandler, "handle");
      const spySendConsoleLog2Handler = jest.spyOn(sendConsoleLog1Handler, "handle");
      const spySendConsoleLog1Handler = jest.spyOn(sendConsoleLog2Handler, "handle");
      const spySendConsoleLogWhenCustomerAddressChanged = jest.spyOn(sendConsoleLogWhenCustomerAddressChanged, "handle");

  
      eventDispatcher.register("ProductCreatedEvent", sendEmailWhenProductIsCreatedHandler);
      eventDispatcher.register("CustomerCreatedEvent", sendConsoleLog1Handler);
      eventDispatcher.register("CustomerCreatedEvent", sendConsoleLog2Handler);
      eventDispatcher.register("CustomerAddressChangedEvent", sendConsoleLogWhenCustomerAddressChanged);

      expect(
        eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
      ).toMatchObject(sendEmailWhenProductIsCreatedHandler);
      expect(
        eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
      ).toMatchObject(sendConsoleLog1Handler);
      expect(
        eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
      ).toMatchObject(sendConsoleLog2Handler);
      expect(
        eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
      ).toMatchObject(sendConsoleLogWhenCustomerAddressChanged);
  
      const productCreatedEvent = new ProductCreatedEvent({
        name: "Product 1",
        description: "Product 1 description",
        price: 10.0,
      });

      const customerCreatedEvent = new CustomerCreatedEvent({
        id: "123",
        name: "Customer 1",
      });

      const customerChangedAddressEvent = new CustomerAddressChangedEvent({
        id: "123",
        name: "Customer 1",
        street: "Rua 1",
        number: "123",
        city: "Cidade 1",
        state: "Estado 1",
        cep: "12345678",
      });
  
      // Quando o notify for executado o SendEmailWhenProductIsCreatedHandler.handle() deve ser chamado
      eventDispatcher.notify(productCreatedEvent);
      eventDispatcher.notify(customerCreatedEvent);
      eventDispatcher.notify(customerChangedAddressEvent);

      expect(spySendEmailWhenProductIsCreatedHandler).toHaveBeenCalled();
      expect(spySendConsoleLog1Handler).toHaveBeenCalled();
      expect(spySendConsoleLog2Handler).toHaveBeenCalled();
      expect(spySendConsoleLogWhenCustomerAddressChanged).toHaveBeenCalled();
    });

  });