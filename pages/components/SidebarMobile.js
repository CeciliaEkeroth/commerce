import styles from "../../styles/Layout.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function SidebarMobile({ showMobile }) {
  
  // Search function for mobile
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

  // Get location in order to change link colors
  const location = router.pathname;

  const pageLocation = (path) => {
    if (location === path) {
      return {
        color: "#EC5D19",
      };
    } else {
      return {
        color: "black",
      };
    }
  };

  return (
    <div style={{ display: showMobile ? "initial" : "none" }}>
      <div className={styles.mobileMenu}>
        <input
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Sök..."
          className="search"
          onKeyDown={(e) => redirect(e)}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          <Link href="/">
            <li style={pageLocation("/")}>Startsida</li>
          </Link>
          <Link href="/products">
            <li style={pageLocation("/products")}>Produkter</li>
          </Link>
          <Link href="/about">
            <li style={pageLocation("/about")}>Om oss</li>
          </Link>
          <Link href="/contact">
            <li style={pageLocation("/contact")}>Kontakt</li>
          </Link>
        </ul>
      </div>
      <div className={styles.dark}></div>
    </div>
  );
}

export default SidebarMobile;
