import styles from "../../styles/Startpage.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "@/store/features/cartSlice";
import { BsCartPlus } from "react-icons/bs";
import { useEffect } from "react";

function startpage({ startpage, products }) {
  // Get cart
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Update totals
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Add to cart function
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Get recently added products
  const recentlyAdded = products.slice(0, 4);

  return (
    <div className={styles.startpage}>
      <div className={styles.welcome}>
        <img
          src={"https://" + startpage[0].fields.welcomeImage.fields.file.url}
          alt=""
        />
        <div className={styles.welcomeItem}>
          <h1>{startpage[0].fields.title}</h1>
          <p>{startpage[0].fields.content}</p>
          <Link href="/about">
            <button>läs mer</button>
          </Link>
        </div>
      </div>
      <div className={styles.new}>
        <h2>Nyligen tillagda produkter</h2>
        <div className={styles.grid}>
          {recentlyAdded.map((product, i) => {
            return (
              <div key={i}>
                <Link href={"/products/" + product.fields.slug}>
                  <img
                    src={
                      "https://" + product.fields.productImage.fields.file.url
                    }
                    alt=""
                  />
                </Link>
                <div className={styles.inline}>
                  <Link href={"/products/" + product.fields.slug}>
                    <div>
                      <h3>{product.fields.name}</h3>
                      <p>{product.fields.price} kr</p>
                    </div>
                  </Link>
                  <button onClick={() => handleAddToCart(product.fields)}>
                    <BsCartPlus />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.email}>
        <h4>prenumerera och få 10% rabatt</h4>
        <input type="email" placeholder="Skriv in din Email adress" />
        <button>prenumerera</button>
      </div>
    </div>
  );
}

export default startpage;
