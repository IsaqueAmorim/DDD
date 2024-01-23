import Product from "../../../domain/entity/product";
import ProductService from "../../../domain/service/product.service";

describe("Product service unit tests", () => {

    it("should chage the prices of all products", () => {

        const product = new Product("123", "Product 1", 100);
        const product2 = new Product("124", "Product 2", 200);
        const products = [product, product2];

        ProductService.increasePrice(products, 100)

        expect(products[0].price).toBe(200);
        expect(products[1].price).toBe(400);

    });
})