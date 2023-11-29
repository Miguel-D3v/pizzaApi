import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { Status } from "https://deno.land/std@0.183.0/http/http_status.ts";
import { Model} from "../../database/model/model.ts";

  interface OrderParams {
    id: string;
  }
export default class OrderController {

    static async AddOrder(ctx:RouterContext<'/orders'>){
        const body = await ctx.request.body({ type: 'json' }).value;
        try {
            const orderModel = new Model();
            await orderModel.addOrder(body);
            ctx.response.body = { "message": "Order added successfully" };
            ctx.response.status = Status.Created;
        } catch (error) {
            ctx.response.body = {
                error: true,
                message: error.message
               }
        }
    }

   static async GetOrder(ctx:RouterContext<'/orders'>){
         try {
            const orderModel = new Model();
            const allOrder =await orderModel.findAllOrders();
            ctx.response.body =  {
                "message": "Ok",
                "Orders": allOrder
              };
            ctx.response.status = Status.OK;
         } catch (error) {
            ctx.response.body = {
                error: true,
                message: error.message
               }
         }
    }
   
    static async GetOrderById(ctx: RouterContext<'/order/:id'>) {
        try {
          const orderModel = new Model();
          const order = await orderModel.findOrderById({ order_id: ctx.params.id });
    
          ctx.response.body = {
            message: "Ok",
            order: order,
          };
          ctx.response.status = Status.OK;
        } catch (error) {
          ctx.response.body = {
            error: true,
            message: error.message,
          };
        }
      }
       
    
}