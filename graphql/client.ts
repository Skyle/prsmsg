import {
  createClient,
  dedupExchange,
  cacheExchange,
  subscriptionExchange,
  Client,
  Exchange,
} from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { createClient as createWSClient } from "graphql-ws";

export const createUrqlClient = (): Client => {
  const graphqlEndpoint = process.env!.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  const graphqlWebsocketEndpoint = process.env!
    .NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT as string;

  let exchanges: Exchange[] | undefined = [
    dedupExchange,
    cacheExchange,
    multipartFetchExchange,
  ];

  if (typeof window !== "undefined") {
    const wsClient = createWSClient({
      url: "https://chat.nrdz.de/graphiql",
    });

    const subExchange = subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    });

    exchanges.push(subExchange);
  }

  const client = createClient({
    url: "https://chat.nrdz.de/graphiql",
    requestPolicy: "cache-and-network",
    exchanges,
    fetchOptions: () => ({
      credentials: "include",
    }),
  });

  return client;
};
