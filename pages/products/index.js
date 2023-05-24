import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ProductListing from '../components/ProductListing'
import { createClient } from 'contentful'
import styles from '../../styles/ProductListing.module.css'
import { useRouter } from 'next/router'

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

  const router = useRouter();

  const location = router.pathname
    
  return (
    <Layout>
    <Sidebar products={products} location={location}/>
    <h1 className={styles.title}>Alla produkter</h1>
    <div className={styles.listing}>
    <ProductListing products={products}/>
    </div>
    </Layout>
  )
}

export default index