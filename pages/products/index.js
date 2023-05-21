import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ProductListing from '../components/ProductListing'
import { createClient } from 'contentful'

export async function getStaticProps(){

    const client = createClient({
      space: "9dfuiiplny0l",
      accessToken: "kpEeblBQnevucoN7lG8BHqgQb-8XHcHYp-FV5tF4B5g",
    })
  
    const response = await client.getEntries({ content_type: 'products'})
  
    return {
      props: {
        products: response.items,
      }
    }
  }

function index( {products} ) {
    
  return (
    <Layout>
    <Sidebar products={products}/>
    <ProductListing products={products}/>
    </Layout>
  )
}

export default index