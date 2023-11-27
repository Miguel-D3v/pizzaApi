import { Application } from 'https://deno.land/x/oak/mod.ts';
import "https://deno.land/std@0.207.0/dotenv/load.ts";
import router from "./routes.ts"
import { Model } from "./database/model/model.ts";

const model = new Model();

const PORT = Deno.env.get("PORT");

const app = new Application();


app.use(router.routes());
app.use(router.allowedMethods());

model.sync();
console.log("Server running on port " + PORT);
await app.listen({ port: Number(PORT) });
