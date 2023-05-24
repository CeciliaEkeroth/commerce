import Head from "next/head";
import Layout from "./components/layout";
import { createClient } from "contentful";
import Hero from "./components/Hero";
import Startpage from "./components/Startpage";

// Get Data
export const getStaticProps = async () => {
  const client = createClient({
    space: "9dfuiiplny0l",
    accessToken: "kpEeblBQnevucoN7lG8BHqgQb-8XHcHYp-FV5tF4B5g",
  });

  const response = await client.getEntries({ content_type: "products" });
  const response2 = await client.getEntries({ content_type: "startpage" });

  return {
    props: {
      products: response.items,
      startpage: response2.items,
    },
  };
};

export default function Home({ products, startpage }) {
  return (
    <>
      <Head>
        <title>Consid Commerce</title>
      </Head>
      <Layout>
        <Hero startpage={startpage} />
        <Startpage startpage={startpage} products={products} />
      </Layout>
    </>
  );
}
