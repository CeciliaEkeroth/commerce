import "@/styles/globals.css";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import { getTotals } from "@/store/features/cartSlice";

function MyApp({ Component, ...rest }) {
  // Wrap app with store with wrapper for next.js
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  store.dispatch(getTotals());

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
