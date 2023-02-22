import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { z as zod } from "zod";
import { Context } from "../index";

export const trpc = initTRPC.context<Context>().create();

const routes = {
  getUser: trpc.procedure.input(zod.string()).query((req) => {
    console.log(`Received request ${req.ctx.req.originalUrl}`);
    console.log(req.ctx.req.url);
    console.log("req.input :", req.input);
    return { id: req.input, name: "bilbo" };
  }),
  createUser: trpc.procedure
    .input(zod.object({ name: zod.string().min(5) }))
    .mutation(async (req) => {
      const user = { id: 1, name: "andrew" };
      return user;
    }),
};

export const appRouter = trpc.router(routes);
