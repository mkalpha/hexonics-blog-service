import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { z } from "zod";
import { Context } from "../index";

export const trpc = initTRPC.context<Context>().create();

const routes = {
  getUser: trpc.procedure.input(z.string()).query((req) => {
    req.input;
    return { id: req.input, name: "bilbo" };
  }),
  createUser: trpc.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      const user = { id: 1, name: "andrew" };
      return user;
    }),
};

export const appRouter = trpc.router(routes);
