import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.8/middleware.ts";
import { api } from "./api/api.ts";

const app = new Hono();

app.route("/api", api);

app.get("/spa/*", serveStatic({ root: "./dist" }));
app.get("/*", serveStatic({ root: "./docusaurus-ui/build" }));

Deno.serve({
  onListen() {
    console.log("http://localhost:5000");
    console.log("http://localhost:5000/spa");
  },
  port: 5000,
}, app.fetch);
