import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.8/middleware.ts";

const app = new Hono();

app.use("/*", serveStatic({ root: "./docusaurus-ui/build" }));

Deno.serve({
  port: 5000,
}, app.fetch);
