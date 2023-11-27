import { Router } from "https://deno.land/x/oak/mod.ts";
import { pizzaRouter } from "./features/pizza/ports/routes.ts";

const routes = new Router({ prefix: '/api' });

routes.get('/health', (ctx) => ctx.response.body = { success: true });
routes.use(pizzaRouter.routes(), pizzaRouter.allowedMethods());

export default routes;
