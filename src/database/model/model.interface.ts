import { pizza } from "../../domain/pizza.model.ts";

export default interface IModel {
    sync(): void;
    addPizza(_params: { name: string, price: string }): Promise<pizza>;
    findAllPizzas(): Promise<pizza> ;
    addOrder(_params: { pizzaId: number, quantity:number }): Promise<pizza>;
    findAllOrders(): Promise<pizza>;
    findOrderById(_params: {order_id: string}): Promise<pizza|string>;
}