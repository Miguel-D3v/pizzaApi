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
    
  addPizza(_params:{ name: string , price : string }){
        const result = sql `
        INSERT INTO pizza ( name , price )
        VALUES (${_params.name}, ${_params.price})
       `
          return result ;
    }    
}