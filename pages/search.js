import Layout from "./components/layout";
import ProductListing from "./components/ProductListing";
import styles from "../styles/ProductListing.module.css";
import Head from "next/head";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { BsEmojiFrown } from "react-icons/bs";

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

function search({ products }) {
  // Get Search Term
  const router = useRouter();
  const searchTerm = router.query.query;

  // Search through data
  const search = (data) => {
    return data.filter(
      (item) =>
        item.fields.name.toLowerCase().includes(searchTerm) ||
        item.fields.category.toLowerCase().includes(searchTerm)
    );
  };

  // Check if there were results
  const checkIfEmpty = () => {
    if (search(products).length > 0) {
      return <ProductListing products={search(products)} />;
    } else {
      return (
        <div className={styles.noResult}>
          <h2>Inga Resultat</h2>
          <BsEmojiFrown className={styles.noResultIcon} />
        </div>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Consid Commerce - Search</title>
      </Head>
      <Layout>
        <div>
          <h1 className={styles.searchTitle}>
            Sök resultat för "{searchTerm}"
          </h1>
          {checkIfEmpty()}
        </div>
      </Layout>
    </>
  );
}

export default search;
