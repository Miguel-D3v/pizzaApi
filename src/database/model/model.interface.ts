import { pizza } from "../../domain/pizza.model.ts";

export default interface IModel {
    sync(): void;
    addPizza(_params: { name: string, price: number }): Promise<pizza>;
}