import React from 'react'
import logo from '../../public/images/considcommerce.svg'
import Image from 'next/image'
import styles from '../../styles/Layout.module.css'
import { BsCart3, BsSearch } from 'react-icons/bs';

function header() {
  return (
    <>
    <div className={styles.header}>
      <Image src={logo} alt='company logo'/>
      <p>Home</p>
      <p>Products</p>
      <input type="text" placeholder="&#x1F50E;&#xFE0E; Search..." />
      <BsCart3 className={styles.shoppingCart}/>
    </div>
    </>
  )
}

export default header