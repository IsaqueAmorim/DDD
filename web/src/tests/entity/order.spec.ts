import Order from "../../entity/order";

describe("Order unit tests", () => {
    it("Should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });
});
