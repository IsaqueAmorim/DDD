import { ProductType } from "../entity/product-type.enum";
import ProductFactory from "./product.factory";

describe("Product Factory unit test", () => {

  it("should create a product", () => {
    const  product = ProductFactory.create(ProductType.ProductA, "Product 1", 10);
    expect(product.id).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.price).toBe(10)
    expect(product.constructor.name).toBe("Product");
  });

  it("should create a product b", () => {
    const product = ProductFactory.create(ProductType.ProductB, "Product 1", 10);
    expect(product.id).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.price).toBe(20)
    expect(product.constructor.name).toBe("ProductB");
  });

});