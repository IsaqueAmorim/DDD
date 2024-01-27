import Address from "../value-objects/address";
import CustomerFactory from "./customer-factory";

describe("Customer Factory unit test", () => {

  it("should create a customer",() => {
    const customer =  CustomerFactory.create("Jhon");
    
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Jhon");
    expect(customer.Address).toBeUndefined()
  });

  it("should create a customer with an address",() => {
    const address = new Address("Street 1",1,"City","Country");
    const customer = CustomerFactory.createWithAddress("Jhon",address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Jhon");
    expect(customer.Address).toBeDefined();
    expect(customer.Address).toBe(address);
  });

});