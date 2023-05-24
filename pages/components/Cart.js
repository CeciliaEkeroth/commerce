import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
} from "@/store/features/cartSlice";
import styles from "../../styles/Cart.module.css";
import { useDispatch } from "react-redux";
import { BsArrowLeft, BsCart3 } from "react-icons/bs";
import Link from "next/link";

function cart({ cart }) {
  
  // Add functions to cart
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleAdd = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className={styles.cart}>
        <h1>Din Varukorg</h1>
        {cart.cartItems.length === 0 ? (
          <div className={styles.empty}>
            <h2>Din varukorg är för nuvarande tom</h2>
            <Link href="/products">
              <p>
                <BsArrowLeft /> Till shoppen
              </p>
            </Link>
            <div>
              <BsCart3 className={styles.cartIcon} />
            </div>
          </div>
        ) : (
          <div className={styles.box}>
            <div className={styles.headings}>
              <h3>Produkt</h3>
              <h3>Pris</h3>
              <h3>Antal</h3>
              <h3>Total</h3>
            </div>
            <div>
              {cart.cartItems?.map((cartItem) => (
                <div key={cartItem.id} className={styles.grid}>
                  <div className={styles.product}>
                    <img
                      src={"https://" + cartItem.productImage.fields.file.url}
                      alt=""
                    />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <button onClick={() => handleRemove(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p>{cartItem.price} kr</p>
                  <div className={styles.quantity}>
                    <button onClick={() => handleDecrease(cartItem)}>-</button>
                    <p>{cartItem.cartQuantity}</p>
                    <button onClick={() => handleAdd(cartItem)}>+</button>
                  </div>
                  <p>{cartItem.price * cartItem.cartQuantity} kr</p>
                </div>
              ))}
            </div>
            <div className={styles.checkout}>
              <div className={styles.clear}>
                <button onClick={() => handleClear()}>Rensa</button>
              </div>
              <div className={styles.proceed}>
                <h4>Totalt: {cart.cartTotalAmount} kr</h4>
                <Link href="/checkout">
                  <button>Till Kassan</button>
                </Link>
                <p>
                  <BsArrowLeft /> Fortsätt shoppa
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default cart;
