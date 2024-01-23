import Product from "../../../domain/entity/product";

describe("Product unit tests", () => {

    it ("Should throw error when id is empty", () => {
        expect(() => {
            let product = new Product("", "123", 100);
        }).toThrow("Id is required");
    });

    it ("Should throw error when name is empty", () => {
        expect(() => {
            let product = new Product("123", "", 100);
        }).toThrow("Name is required");
    });

    it ("Should throw error when price is less than zero", () => {
        expect(() => {
            let product = new Product("123", "123", 0);
        }).toThrow("Price must be greater than zero");
    });

    it ("should change name", () => {
        let product = new Product("123", "Product 1", 100);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");
    });

    it("should not change name when name is empty", () => {
        let product = new Product("123", "Product 1", 100);
        expect(() => {
            product.changeName("");
        }).toThrow("Name is required");
    });

    it("should change price", () => {
        let product = new Product("123", "Product 1", 100);
        product.changePrice(200);
        expect(product.price).toBe(200);
    });
    
});