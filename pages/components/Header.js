import React from 'react'
import logo from '../../public/images/considcommerce.svg'
import Image from 'next/image'
import styles from '../../styles/Layout.module.css'
import { BsCart3, BsSearch } from 'react-icons/bs';
import Link from 'next/link';

function header() {
  return (
    <>
    <div className={styles.header}>
      <Link href="/">
      <Image src={logo} alt='company logo'/>
      </Link>
      <Link href="/">
      <p>Home</p>
      </Link>
      <Link href="/products">
      <p>Products</p>
      </Link>
      <Link href="/about">
      <p>About</p>
      </Link>
      <Link href="/contact">
      <p>Contact</p>
      </Link>
      <input type="text" placeholder="&#x1F50E;&#xFE0E; Search..." />
      <BsCart3 className={styles.shoppingCart}/>
    </div>
    </>
  )
}

export default header