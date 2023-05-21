import React from 'react'
import styles from '../../styles/ProductListing.module.css'
import Link from 'next/link'

function ProductListing({products}) {

  return (
    <div className={styles.grid}>
        {products.map((product, i) => {
            return(
                <Link href={'/products/' + product.fields.slug} key={i}>
                <div>
                    <img src={
                      "https://" + product.fields.productImage.fields.file.url
                    } alt="" />
                    <h2>{product.fields.name}</h2>
                    <h3>{product.fields.price} kr</h3>
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductListing