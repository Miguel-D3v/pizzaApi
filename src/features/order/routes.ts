import { Router } from "https://deno.land/x/oak/mod.ts";
import OrderController from "./orderController.ts";

export  const orderRouter = new Router();

 orderRouter.post("/orders",OrderController.AddOrder);
 orderRouter.get("/orders",OrderController.GetOrder);
 orderRouter.get("/order/:id",OrderController.GetOrderById);

