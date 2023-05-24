import { BsPatchCheck } from "react-icons/bs";
import styles from "../../styles/Checkout.module.css";

function Confirmation({ cart }) {
  return (
    <>
      <div className={styles.message}>
        <h1>Tack för din beställning!</h1>
        <BsPatchCheck className={styles.icon} />
      </div>
      <div className={styles.box}>
        <h2>Orderdetaljer #651428</h2>
        <div>
          <div className={styles.headings}></div>
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
                  </div>
                </div>
                <p>{cartItem.price} kr</p>
                <div className={styles.quantity}>
                  <p>{cartItem.cartQuantity}</p>
                </div>
                <p>{cartItem.price * cartItem.cartQuantity} kr</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
