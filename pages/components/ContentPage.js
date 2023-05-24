import styles from "../../styles/contentPage.module.css";

function contentPage({ page }) {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <img src={"https://" + page.fields.image.fields.file.url} alt="" />
        <h1>{page.fields.title}</h1>
        <p>{page.fields.content}</p>
      </div>
    </div>
  );
}

export default contentPage;
