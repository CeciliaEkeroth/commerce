import { useSelector } from "react-redux";
import Layout from "./components/layout";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotals } from "@/store/features/cartSlice";

function cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        <Cart cart={cart} />
      </Layout>
    </>
  );
}

export default cart;
