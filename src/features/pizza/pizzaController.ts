import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Status } from "https://deno.land/std@0.183.0/http/http_status.ts";
import { Model } from "../../database/model/model.ts";

export default class PizzaController {
   
  
  static async AddPizza(ctx: RouterContext<'/pizzas'>){
       const body = await ctx.request.body({ type: 'json' }).value;
    try {
        const pizzaModel = new Model();
        await pizzaModel.addPizza(body)
        ctx.response.body = { "message": "Pizza added successfully" };
        ctx.response.status = Status.Created;
    } catch (error) {
        ctx.response.body = {
        error: true,
        message: error.message
      };
    }
  }

  static async AllPizzas(ctx: RouterContext<'/pizzas'>){
       try {
         const pizzaModel = new Model();
         const allpizza =  await pizzaModel.findAllPizzas()
         ctx.response.body = {
              "message": "Ok",
              "Pizzas": allpizza
            };
         ctx.response.status = Status.OK;
       } catch (error) {
         ctx.response.body = {
          error: true,
          message: error.message
         }
       }
  }
}
