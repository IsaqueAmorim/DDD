import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it("Should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123","",[])
        }).toThrow("CustomerId is required")
    });

    it("Item quantity must be greater than 0", () => {
        expect(() => {
            let order = new Order("123","234",[]);
        }).toThrow("Items are required")
    });
    
    it("Should calculate total", () => {
        
        const item = new OrderItem("i1","Item 1",100, "p1", 2);
        const item2 = new OrderItem("i2","Item 2", 200,"p2",2);

        const order = new Order("o1","c1",[item]);
        const order2 = new Order("o2","c2",[item,item2]);
        
        
        expect(order.total()).toBe(200);
        expect(order2.total()).toBe(600);
    })
});
