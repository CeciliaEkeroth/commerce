import styles from "../../styles/ProductListing.module.css";
import Link from "next/link";

function Sidebar({ products, location, showMobile }) {
  
  // Get unique categoreis
  const allCategories = [];

  const getCategories = () => {
    products.map((product) => {
      allCategories.push(product.fields.category);
    });
  };

  getCategories();

  let uniqueCategories = [...new Set(allCategories)];

  // Change li element color depending on url
  const pageLocation = (path) => {
    if (location === path) {
      return {
        color: "#EC5D19",
      };
    } else {
      return {
        color: "black",
      };
    }
  };

  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          <Link href="/products">
            <li style={pageLocation("/products")}>Alla produkter</li>
          </Link>
          {uniqueCategories.map((category, i) => {
            return (
              <Link href={"/categories/" + category} key={i}>
                <li style={pageLocation(category)}>{category}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div style={{ display: showMobile ? "initial" : "none" }}>
        <div className={styles.sidebarMobile}>
          <ul>
            <Link href="/products">
              <li style={pageLocation("/products")}>Alla produkter</li>
            </Link>
            {uniqueCategories.map((category, i) => {
              return (
                <Link href={"/categories/" + category} key={i}>
                  <li style={pageLocation(category)}>{category}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={styles.dark}></div>
      </div>
    </>
  );
}

export default Sidebar;
