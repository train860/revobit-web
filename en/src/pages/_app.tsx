import "../styles/globals.scss";

import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/harmony/HarmonyOS_Sans_SC_Regular.ttf",
    },
  ],
  variable: "--font-harmony",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.variable}>
      <Head>
        <link
          rel="preload"
          href="/fonts/harmony/HarmonyOS_Sans_SC_Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/truetype"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
