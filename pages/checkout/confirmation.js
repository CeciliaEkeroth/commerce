import Head from "next/head";
import Confirmation from "../components/Confirmation";
import Layout from "../components/layout";
import { useSelector } from "react-redux";

function confirmation() {
  
  // Get cart
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Head>
        <title>Consid Commerce - Confirmed</title>
      </Head>
      <Layout>
        <Confirmation cart={cart} />
      </Layout>
    </>
  );
}

export default confirmation;
