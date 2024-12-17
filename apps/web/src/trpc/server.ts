import { appRouter } from "@/server/api/root";
import { httpBatchLink, createTRPCProxyClient } from "@trpc/client";
import superjson from "superjson";

export const api = createTRPCProxyClient<typeof appRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
    }),
  ],
});