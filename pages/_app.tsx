import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "urql";
import { createUrqlClient } from "../graphql/client";

import InfoOverlays from "../components/overlay/InfoOverlays";

const client = createUrqlClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <main className="relative">
        <InfoOverlays></InfoOverlays>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
