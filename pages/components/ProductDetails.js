import styles from "../../styles/Productdetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "@/store/features/cartSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

function ProductDetails(product) {
  const router = useRouter();

  // Simplify
  const details = product.product;

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

  return (
    <div>
      <div className={styles.goBack}>
        <span onClick={() => router.back()}>
          <BsArrowLeft className={styles.goBackIcon} /> Go Back
        </span>
      </div>
      <div className={styles.grid}>
        <img
          src={"https://" + details.fields.productImage.fields.file.url}
          alt=""
        />
        <h1>{details.fields.name}</h1>
        <h2>{details.fields.price} kr</h2>
        <p>{details.fields.description}</p>
        <select name="" id="">
          <option value="">Välj storlek</option>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
        </select>
        <button onClick={() => handleAddToCart(details.fields)}>
          Lägg i varukorgen
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
