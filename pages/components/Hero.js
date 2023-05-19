import React from 'react'
import styles from '../../styles/Startpage.module.css'

function Hero(startpage) {
    const heroItem = startpage.startpage[0]
    // console.log(heroItem)
  return (
    <div className={styles.hero}>
        <img
          src={"https://" + heroItem.fields.heroimage.fields.file.url}
          alt="page hero"  
        />
        <h2><span>Make a statment of yourself.</span></h2>
    </div>
  )
}

export default Hero