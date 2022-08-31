import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "urql";
import { createUrqlClient } from "../graphql/client";
import MessageCount from "../components/MessageCount";
import GQLLink from "../components/GQLLink";

const client = createUrqlClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <main className="relative">
        <div className="absolute top-4 left-4 z-50">
          <MessageCount></MessageCount>
        </div>
        <div className="absolute top-4 right-4 z-50">
          <GQLLink></GQLLink>
        </div>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
