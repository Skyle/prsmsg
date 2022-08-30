import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "urql";
import { createUrqlClient } from "../graphql/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={createUrqlClient}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
