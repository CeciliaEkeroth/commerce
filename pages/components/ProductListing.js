import React from "react";
import styles from "../../styles/ProductListing.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "@/store/features/cartSlice";
import { useSelector } from 'react-redux'
import { useEffect } from "react";

import { BsCartPlus } from "react-icons/bs";

function ProductListing({ products }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.grid}>
      {products.map((product, i) => {
        return (
          <div key={i}>
            <Link href={"/products/" + product.fields.slug}>
              <img
                src={"https://" + product.fields.productImage.fields.file.url}
                alt=""
              />
            </Link>
            <div className={styles.inline}>
              <Link href={"/products/" + product.fields.slug}>
                <div>
                  <h2>{product.fields.name}</h2>
                  <h3>{product.fields.price} kr</h3>
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
  );
}

export default ProductListing;
