import {
  createClient,
  dedupExchange,
  cacheExchange,
  subscriptionExchange,
  Client,
  Exchange,
  fetchExchange,
} from "urql";

import { createClient as createWSClient } from "graphql-ws";

export const createUrqlClient = (): Client => {
  let exchanges: Exchange[] = [dedupExchange, cacheExchange, fetchExchange];

  if (typeof window !== "undefined") {
    const wsClient = createWSClient({
      url: "wss://chat.nrdz.de/graphql",
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
    url: "https://chat.nrdz.de/graphql",
    requestPolicy: "cache-and-network",
    exchanges,
  });

  return client;
};
