import { initTRPC } from "@trpc/server";
import { z as zod } from "zod";
import { Context } from "../index";

export const trpc = initTRPC.context<Context>().create();

const routes = {
  getBlogs: trpc.procedure.input(zod.string()).query((req) => {
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
