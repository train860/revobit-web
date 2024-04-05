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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GDV13TYB55"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GDV13TYB55');
        </script>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
