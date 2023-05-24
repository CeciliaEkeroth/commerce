import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ProductListing from "../components/ProductListing";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import { createClient } from "contentful";
import styles from "../../styles/ProductListing.module.css";
import { BsList } from "react-icons/bs";

// Get data for dynamic page
export async function getStaticPaths(ctx) {
  return {
    paths: [],
    fallback: "blocking",
  };
}

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

function category({ products }) {
  
  // Get category from url
  const router = useRouter();
  const categoryName = router.query.category;

  const categoryProducts = [];

  // Check category
  products.map((product) => {
    if (product.fields.category === categoryName) {
      categoryProducts.push(product);
    }
  });

  // For mobile viewing
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <Head>
        <title>Consid Commerce - {categoryName}</title>
      </Head>
      <Layout>
        <h1 className={styles.title}>
          <BsList
            className={styles.titleIcon}
            onClick={() =>
              showMobile ? setShowMobile(false) : setShowMobile(true)
            }
          />{" "}
          {categoryName}
        </h1>
        <Sidebar
          products={products}
          location={categoryName}
          showMobile={showMobile}
        />
        <div className={styles.listing}>
          <ProductListing products={categoryProducts} />
        </div>
      </Layout>
    </>
  );
}

export default category;
