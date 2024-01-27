import OrderModel from "./order.model";
import OrderItemModel from "./order-item.model";
import Order from "../../../../domain/checkout/entity/order";
import RepositoryInterface from "../../../../domain/@shared/repository/repository-interface";
import OrderItem from "../../../../domain/checkout/entity/order_item";

export default class OrderRepository implements RepositoryInterface<Order> {
  async update(entity: Order): Promise<void> {

    await OrderModel.update(
      {
        items: entity.items
      },
      {
        where: {
          id: entity.id,
          include: [{ model: OrderItemModel }],
        },
      }
    );
  }
  async findById(id: string): Promise<Order> {
    let order = await OrderModel.findOne({ where: { id } });
    return new Order(
      id,
      order.customer_id,
      order.items.map(
        (item) =>
          new OrderItem(
            item.id,
            item.name,
            item.price,
            item.product_id,
            item.quantity
          )
      )
    );
  }
  async findAll(): Promise<Order[]> {
    let orders = await OrderModel.findAll({
      include: [{ model: OrderItemModel }],
    });

    return orders.map(
      (order) =>
        new Order(
          order.id,
          order.customer_id,
          order.items.map(
            (item) =>
              new OrderItem(
                item.id,
                item.name,
                item.price,
                item.product_id,
                item.quantity
              )
          )
        )
    );
  }
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }
}
