import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Admin Dashboard </title>
        <meta
          name="description"
          content="Ample Admin Next Js Aadmin Dashboard "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  );
}

export default MyApp;
