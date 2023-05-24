import React from 'react'
import styles from '../../styles/Productdetails.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/features/cartSlice';

function ProductDetails(product) {

    const details = product.product

    const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

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
            <button onClick={() => handleAddToCart(details.fields)}>Lägg i varukorgen</button>
        </div>
    </div>
  )
}

export default ProductDetails