import { inferAsyncReturnType } from "@trpc/server";
import { appRouter } from "./routes";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res }); // no context

const PORT = 5000;

const app = express();
app.use(cors());
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
