import React from 'react'
import styles from '../../styles/Productdetails.module.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { createClient } from 'contentful'

function productDetails() {

    const router = useRouter();
    const productSlug = router.query.product; 

    console.log(productSlug)

  return (
    <div>[product]</div>
  )
}

export default productDetails