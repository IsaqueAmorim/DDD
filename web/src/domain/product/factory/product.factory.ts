import ProductInterface from "../entity/product.interface";
import { ProductType } from "../entity/product-type.enum";
import ProductB from "../entity/Product-b";
import Product from "../entity/product";
import {v4 as uuid} from "uuid";


export default class ProductFactory {
    public static create(type: ProductType, name: string, price: number): ProductInterface {

      switch(type){
        case ProductType.ProductA:
          return new Product(uuid(), name, price);
        case ProductType.ProductB:
          return new ProductB(uuid(), name, price);
        default:
          throw new Error("Invalid type");
      }
    };
}