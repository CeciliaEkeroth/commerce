import React from 'react'
import styles from '../../styles/Layout.module.css'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsPinterest } from 'react-icons/bs';


function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInfo}>
        <div>
          <p>Follow us</p>
          <ul className={styles.socialsIcons}>
            <li>
              <BsFacebook/>
            </li>
            <li>
              <BsInstagram/>
            </li>
            <li>
              <BsTwitter/>
            </li>
            <li>
              <BsYoutube/>
            </li>
            <li>
              <BsPinterest/>
            </li>
          </ul>
        </div>
        <div>
          <p>Om oss</p>
          <ul>
            <li>Vår historia</li>
            <li>Jobba hos oss</li>
          </ul>
        </div>
        <div>
          <p>Kundtjänst</p>
          <ul>
              <li>Kontakta oss</li>
            <li>Köpvillkor</li>
            <li>FAQ</li>
            <li>Frakt</li>
            <li>Returer</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>© COPYRIGHT</span>
      </div>
    </div>
  )
}

export default footer