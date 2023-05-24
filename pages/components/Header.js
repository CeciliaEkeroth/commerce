import React from "react";
import logo from "../../public/images/considcommerce.svg";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";
import { BsCart3, BsList } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

function header() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const redirect = (e) => {
    if (e.keyCode == 13) {
      router.push({
        pathname: "/search",
        query: { query: searchTerm },
      });
      const inputfield = document.querySelector(".search");
      inputfield.value = inputfield.defaultValue;
    }
  };

  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <>
      <div className={styles.header}>
        <BsList className={styles.mobileMenu}/>
          <Image src={logo} alt="company logo" />
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
        <input
          className="search"
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Search..."
          onKeyDown={(e) => redirect(e)}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link href="/cart">
          <div className={styles.last}>
          <BsCart3 className={styles.shoppingCart} />
          <span>{cart.cartTotalQuantity}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default header;
