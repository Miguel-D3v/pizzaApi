import { Router } from "https://deno.land/x/oak/mod.ts";
import pizzaController from "./pizzaController.ts";

export  const pizzaRouter = new Router();

 pizzaRouter.post("/pizzas",pizzaController.AddPizza);

