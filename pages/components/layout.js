import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from '../../styles/Home.module.css'

function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
