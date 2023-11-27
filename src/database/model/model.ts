import sql from "../connection.ts";
import IModel from "./model.interface.ts";

export class Model implements IModel {
    async sync(): Promise<void> {
        try {
            const createPizzaTable = await sql `
                CREATE TABLE pizza (
                    pizza_id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    price VARCHAR(50) NOT NULL
                );
            `;
    
            const createOrdersTable = await sql `
                CREATE TABLE orders (
                    order_id SERIAL PRIMARY KEY
                );
            `;
    
            const createOrderItemsTable = await sql `
                CREATE TABLE order_items (
                    item_id SERIAL PRIMARY KEY,
                    pizza_id INT REFERENCES pizza(pizza_id),
                    quantity INT NOT NULL,
                    order_id INT REFERENCES orders(order_id),
                    UNIQUE(pizza_id, order_id)
                );
            `;
    
            console.log("CREATED TABLES:", createPizzaTable, createOrdersTable, createOrderItemsTable);
        } catch (e) {
            console.error(e);
        }
    }
  addPizza(_params:{ name: string , price : number }){
        const result = sql `
        INSERT INTO pizza ( name , price )
        VALUES (${_params.name}, ${_params.price})
       `
          return result ;
    }    
}