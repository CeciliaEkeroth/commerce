import Head from "next/head";
import Layout from "../components/layout";
import Checkout from "../components/Checkout";

function index() {
  return (
    <>
      <Head>
        <title>Consid Commerce - Checkout</title>
      </Head>
      <Layout>
        <Checkout />
      </Layout>
    </>
  );
}

export default index;
