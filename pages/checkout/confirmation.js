import Confirmation from "../components/Confirmation"
import Layout from "../components/layout"
import { useSelector } from "react-redux";

  

function confirmation() {

    const cart = useSelector((state) => state.cart);
    
  return (
    <>
    <Layout>
        <Confirmation cart={cart}/>
    </Layout>
    </>
  )
}

export default confirmation