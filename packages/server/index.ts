import { inferAsyncReturnType } from "@trpc/server";
import { appRouter } from "./routes";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

const PORT = 4000;

const app = express();
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

type Context = inferAsyncReturnType<typeof createContext>;
type AppRouter = typeof appRouter;

export { Context, AppRouter };
