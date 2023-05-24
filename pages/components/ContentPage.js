import React from 'react'
import styles from '../../styles/contentPage.module.css'

function contentPage({page}) {

    console.log(page)
  return (
    <div className={styles.page}>
    <div className={styles.grid}>
        <h1>{page.fields.title}</h1>
        <p>{page.fields.content}</p>
        <img src={"https://" + page.fields.image.fields.file.url} alt="" />
    </div>
    </div>
  )
}

export default contentPage