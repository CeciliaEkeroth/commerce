import Head from "next/head";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import ProductListing from "../components/ProductListing";
import { BsList } from "react-icons/bs";
import { createClient } from "contentful";
import styles from "../../styles/ProductListing.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

// Get data
export async function getStaticProps() {
  const client = createClient({
    space: "9dfuiiplny0l",
    accessToken: "kpEeblBQnevucoN7lG8BHqgQb-8XHcHYp-FV5tF4B5g",
  });

  const response = await client.getEntries({ content_type: "products" });

  return {
    props: {
      products: response.items,
    },
  };
}

function index({ products }) {
  // state for mobile menu
  const [showMobile, setShowMobile] = useState(false);

  // Location in order to color menu options
  const router = useRouter();
  const location = router.pathname;

  return (
    <>
      <Head>
        <title>Consid Commerce - Products</title>
      </Head>
      <Layout>
        <h1 className={styles.title}>
          <BsList
            className={styles.titleIcon}
            onClick={() =>
              showMobile ? setShowMobile(false) : setShowMobile(true)
            }
          />{" "}
          Alla produkter
        </h1>
        <Sidebar
          products={products}
          location={location}
          showMobile={showMobile}
        />
        <div className={styles.listing}>
          <ProductListing products={products} />
        </div>
      </Layout>
    </>
  );
}

export default index;
