import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Jhon")
        }).toThrow("Id is required");
    
    })

    it("Should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "")
        }).toThrow("Name is required");
    
    })

    it("Should change name", () => {
        expect(() => {
            let customer = new Customer("123", "Jhon");

            customer.changeName("Jane");
            
            expect(customer.name).toEqual("Jane");
        });
    })

    it("showld change name to empty trhow error", () => {
        expect(() => {
            let customer = new Customer("123", "Jhon");
            customer.changeName("");

        }).toThrow("Name is required");
    });

    it("should activate customer", () => {
        expect(() => {
            let customer = new Customer("123", "Jhon");
            customer.changeAddress(new Address("street", 123, "state", "zip"));
            customer.active();
            expect(customer.isActive).toBe(true);
        });
    });

    it("should deactivate customer", () => {
        expect(() => {
            let customer = new Customer("123", "Jhon");
            customer.deactive();
            expect(customer.isActive).toBe(false);
        });
    });

    it("should throw error when activate customer without address", () => {
        expect(() => {
            let customer = new Customer("123", "Jhon");

            customer.active();
        }).toThrow("Address is mandatory to activate a customer");
    })
    
});