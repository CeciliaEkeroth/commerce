import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "../../styles/Checkout.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

function Checkout() {
  // Get cart
  const cart = useSelector((state) => state.cart);

  // States for buttons
  const [deliverySelect, setDeliverySelect] = useState(false);
  const [deliverySelect2, setDeliverySelect2] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState(false);
  const [paymentSelect2, setPaymentSelect2] = useState(false);

  // Conditional styling
  const style = (select) => {
    if (select === true) {
      return {
        backgroundColor: "#ec5d19",
        color: "white",
        borderRadius: "4px",
      };
    } else {
      return {
        backgroundColor: "rgb(238, 238, 238)",
        color: "black",
        borderRadius: "4px",
      };
    }
  };

  return (
    <>
      <div className={styles.checkout}>
        <h1>Kassan</h1>
        <div className={styles.shipping}>
          <h3 className={styles.title}>1. Fraktsätt</h3>
          <div className={styles.optionBtn}>
            <button
              onClick={() => {
                setDeliverySelect(true);
                setDeliverySelect2(false);
              }}
              style={style(deliverySelect)}
            >
              Hemleverans
            </button>
            <button
              onClick={() => {
                setDeliverySelect(false);
                setDeliverySelect2(true);
              }}
              style={style(deliverySelect2)}
            >
              Ombud
            </button>
          </div>
          <div className={styles.shippingGrid}>
            <input
              className={styles.shippingGrid1}
              type="text"
              placeholder="Förnamn"
            />
            <input
              className={styles.shippingGrid2}
              type="text"
              placeholder="Efternamn"
            />
            <input
              className={styles.shippingGrid3}
              type="text"
              placeholder="Adress"
            />
            <input
              className={styles.shippingGrid4}
              type="text"
              placeholder="Stad"
            />
            <input
              className={styles.shippingGrid5}
              type="text"
              placeholder="Postnummer"
            />
            <input
              className={styles.shippingGrid6}
              type="text"
              placeholder="Email"
            />
            <input
              className={styles.shippingGrid7}
              type="text"
              placeholder="Telefonnummer"
            />
          </div>
        </div>
        <div>
          <h3 className={styles.title}>2. Betalningsmetod</h3>
          <div className={styles.optionBtn}>
            <button
              onClick={() => {
                setPaymentSelect(true);
                setPaymentSelect2(false);
              }}
              style={style(paymentSelect)}
            >
              Visa
            </button>
            <button
              onClick={() => {
                setPaymentSelect2(true);
                setPaymentSelect(false);
              }}
              style={style(paymentSelect2)}
            >
              Mastercard
            </button>
          </div>
          <div className={styles.paymentGrid}>
            <input
              type="text"
              placeholder="Kortnummer"
              className={styles.item1}
            />
            <input type="text" placeholder="kortinnehavares namn" />
            <input type="text" placeholder="CVC" />
            <input type="month" placeholder="Utgångsdatum" />
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.heading}>
          <h2>din varukorg</h2>
        </div>
        <div className={styles.summaryGrid}>
          <p>antal produkter:</p>
          <p className={styles.last}>{cart.cartTotalQuantity}</p>
          <p>pris produkter:</p>
          <p className={styles.last}>{cart.cartTotalAmount} kr</p>
          <p>Fraktkostnad:</p>
          <p className={styles.last}>0 kr</p>
        </div>
        <div className={styles.total}>
          <h3>Totalt: {cart.cartTotalAmount} kr</h3>
          <button>
            <BsArrowLeft /> Återgå till varukorg
          </button>
        </div>
      </div>
      <Link href="/checkout/confirmation">
        <button className={styles.confirm}>Bekräfta Betalning</button>
      </Link>
    </>
  );
}

export default Checkout;
