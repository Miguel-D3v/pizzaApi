import { pizza } from "../../domain/pizza.model.ts";
import sql from "../connection.ts";
import IModel from "./model.interface.ts";

export class Model implements IModel {
  
    async sync(): Promise<void> {
        try {
            await sql `
                CREATE TABLE IF NOT EXISTS pizza (
                    pizza_id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    price VARCHAR(50) NOT NULL
                );
            `;
            console.log("Pizza table created");
    
             await sql `
                CREATE TABLE IF NOT EXISTS orders (
                    order_id SERIAL PRIMARY KEY
                );
            `;
            console.log("Orders table created");
    
             await sql `
                CREATE TABLE IF NOT EXISTS order_items (
                    item_id SERIAL PRIMARY KEY,
                    pizza_id INT REFERENCES pizza(pizza_id),
                    quantity INT NOT NULL,
                    order_id INT REFERENCES orders(order_id),
                    UNIQUE(pizza_id, order_id)
                );
            `;
            console.log("Order_items table created");
        } catch (e) {
            console.error(e);
        }
    }
    
  async addPizza(_params:{ name: string , price : string }){
        const result = await sql `
        INSERT INTO pizza ( name , price )
        VALUES (${_params.name}, ${_params.price})
       `
          return result ;
    }    

  async findAllPizzas(): Promise<pizza> {
        const result = await sql `
         SELECT * FROM pizza ;
       `
       return result ;
  }

  async addOrder(_params: { pizzaId: number; quantity: number; }): Promise<pizza> {
    try {
        const orderResult = await sql`
            INSERT INTO orders DEFAULT VALUES RETURNING order_id
        `;

        const orderId = orderResult[0].order_id;

        const itemResult = await sql`
            INSERT INTO order_items (pizza_id, quantity, order_id)
            VALUES (${_params.pizzaId}, ${_params.quantity}, ${orderId})
            RETURNING *; 
        `;

        return itemResult[0]; 
    } catch (error) {
        console.error(error);
        throw error;
    }

  }
   async findAllOrders(): Promise<pizza> {
    try {
        const result = await sql`
            SELECT
                item.order_id,
                pizza.name AS pizza_name,
                item.quantity
            FROM
                order_items item
            JOIN
                pizza ON item.pizza_id = pizza.pizza_id;
        `;

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }  
  }
}