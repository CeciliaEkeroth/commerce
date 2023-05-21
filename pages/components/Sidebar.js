import React from 'react'
import styles from '../../styles/ProductListing.module.css'

function Sidebar({products}) {

  const allCategories = [];

  const getCategories = () => {
    products.map((product) => {
      allCategories.push(product.fields.category);
    });
  };

  getCategories();

  let uniqueCategories = [...new Set(allCategories)];

  return (
    <div className={styles.sidebar}>
        <ul>
            <li>All products</li>
            {uniqueCategories.map((category, i) =>{
                return (
                    <li key={i}>{category}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar