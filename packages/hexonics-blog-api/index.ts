import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

export const trpc = initTRPC.context<Context>().create();

export const appRouter = trpc.router({
  getUser: trpc.procedure.input(z.string()).query((req) => {
    req.input;
    return { id: req.input, name: "bilbo" };
  }),
  createUser: trpc.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      // use your ORM of choice
      // return await UserModel.create({
      //   data: req.input,
      // });
      const user = { id: 1, name: "andrew" };
      return user;
    }),
});

const app = express();
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(4000);

export type AppRouter = typeof appRouter;
