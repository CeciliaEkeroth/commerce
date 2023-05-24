import logo from "../../public/images/considcommerce.svg";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";
import { BsCart3, BsList } from "react-icons/bs";
import Link from "next/link";
import SidebarMobile from "./SidebarMobile";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

function header() {
  // Make a sate for mobile viewing
  const [showMobile, setShowMobile] = useState(false);

  // Get searchterm
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

  // Get cart
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className={styles.header}>
        <BsList
          className={styles.mobileMenuShow}
          onClick={() =>
            showMobile ? setShowMobile(false) : setShowMobile(true)
          }
        />
        <Image src={logo} alt="company logo" />
        <Link href="/">
          <p>Startsida</p>
        </Link>
        <Link href="/products">
          <p>Produkter</p>
        </Link>
        <Link href="/about">
          <p>Om oss</p>
        </Link>
        <Link href="/contact">
          <p>Kontakt</p>
        </Link>
        <input
          className="search"
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Sök..."
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
      <div>
        <SidebarMobile showMobile={showMobile} />
      </div>
    </>
  );
}

export default header;
