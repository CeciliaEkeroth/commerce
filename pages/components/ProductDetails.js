import React from 'react'
import styles from '../../styles/Productdetails.module.css'

function ProductDetails(product) {

    const details = product.product

  return (
    <div>
        <div className={styles.grid}>
            <img src={"https://" + details.fields.productImage.fields.file.url} alt="" />
            <h1>{details.fields.name}</h1>
            <h2>{details.fields.price} kr</h2>
            <p>{details.fields.description}</p>
            <select name="" id="">
                <option value="">Välj storlek</option>
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
            <button>Lägg i varukorgen</button>
        </div>
    </div>
  )
}

export default ProductDetails