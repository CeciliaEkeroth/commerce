import { useSelector } from "react-redux";
import Layout from "./components/layout";
import Cart from "./components/Cart";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotals } from "@/store/features/cartSlice";

function cart() {
  const dispatch = useDispatch();

  // Get the Cart
  const cart = useSelector((state) => state.cart);

  // Update the totals
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      <Head>
        <title>Consid Commerce - Cart</title>
      </Head>
      <Layout>
        <Cart cart={cart} />
      </Layout>
    </>
  );
}

export default cart;
