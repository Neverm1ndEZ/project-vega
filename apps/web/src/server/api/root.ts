import { exampleRouter } from "./routers/example";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  // Add your routers here
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
