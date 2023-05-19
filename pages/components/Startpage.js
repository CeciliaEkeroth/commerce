import React from "react";
import styles from "../../styles/Startpage.module.css";
import Link from "next/link";

function startpage({ startpage, products }) {
  const recentlyAdded = products.slice(0, 4);

  console.log(startpage[0]);

  return (
    <div className={styles.startpage}>
      <div className={styles.welcome}>
        <h1>{startpage[0].fields.title}</h1>
        <p>{startpage[0].fields.content}</p>
        <img
          src={"https://" + startpage[0].fields.welcomeImage.fields.file.url}
          alt=""
        />
        <div className={styles.round}></div>
      </div>
      <div className={styles.new}>
        <h2>Nyligen tillagda produkter</h2>
        <div className={styles.grid}>
          {recentlyAdded.map((product, i) => {
            return (
              <Link href={"/products/" + product.fields.slug} key={i}>
                <div>
                  <img
                    src={
                      "https://" + product.fields.productImage.fields.file.url
                    }
                    alt=""
                  />
                  <h3>{product.fields.name}</h3>
                  <p>{product.fields.price} kr</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.email}>
        <h4>Sign up and get 10% off</h4>
        <input type="email" placeholder="enter email adress" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default startpage;
