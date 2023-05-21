import React from "react";
import Layout from "./components/layout";
import ContentPage from "./components/ContentPage";
import { createClient } from 'contentful'

export async function getStaticProps(){

    const client = createClient({
      space: "9dfuiiplny0l",
      accessToken: "kpEeblBQnevucoN7lG8BHqgQb-8XHcHYp-FV5tF4B5g",
    })
  
    const response = await client.getEntries({ content_type: 'page'})
  
    return {
      props: {
        pages: response.items,
      }
    }
  }

function contact( {pages} ) {

    const pageArray = []

    pages.map((page) => {
        if (page.fields.slug == "contact") {
            pageArray.push(page)
        }
    })

    const page = pageArray[0]
    
  return (
    <Layout>
      <ContentPage page={page}/>
    </Layout>
  );
}

export default contact;
