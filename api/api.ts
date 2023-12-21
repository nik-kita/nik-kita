import { Context, Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { SugarWs } from "https://deno.land/x/sugar_ws@v0.9.10/mod.ts";

export const api = new Hono();

api.get("/ws", (ctx: Context) => {
  const {
    response,
    socket: _,
  } = Deno.upgradeWebSocket(ctx.req.raw);
  const socket = SugarWs.sugarize(_);

  const stop = setInterval(() => {
    socket.send_if_open(
      new Intl.DateTimeFormat("en", { dateStyle: "full", timeStyle: "full" })
        .format(new Date()),
    );
  }, 2000);

  setTimeout(() => {
    clearInterval(stop);
  }, 10_000);

  return response;
});
