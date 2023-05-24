import Layout from "./components/layout";
import ProductListing from "./components/ProductListing";
import styles from '../styles/ProductListing.module.css'
import { createClient } from "contentful";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const searchTerm = router.query.query;

  const search = (data) => {
    return data.filter(
      (item) =>
        item.fields.name.toLowerCase().includes(searchTerm) ||
        item.fields.category.toLowerCase().includes(searchTerm)
    );
  };

  const checkIfEmpty = () => {
    if (search(products).length > 0) {
      return <ProductListing products={search(products)} />;
    } else {
      return <h2>No Results</h2>;
    }
  };

  return (
    <>
      <Layout>
        <div>
          <h1 className={styles.searchTitle}>Sök resultat för "{searchTerm}"</h1>
          {checkIfEmpty()}
        </div>
      </Layout>
    </>
  );
}

export default search;
