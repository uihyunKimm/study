import React from "react";
import styles from "./../style/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>하이
                <div className={styles.inner_content}>
                    <h3 className={styles.title}>푸터임</h3>
                    <h3 className={styles.title}>bbq 따라서 만들거임</h3>
                </div>
                <ul className='footer-right'>
                  <li>
                    <img src="" alt="tel" />
                    TEL : +82 ) 010-XXXX-XXXX
                  </li>
                  <li>
                    <img src="" alt="mail" />
                    E-Mail : hotbody@gmail.com
                  </li>
                </ul>
            </div> 
        </footer>
    );
};
/* 
export default Footer;

const Footer = () => {
    return (
      <div className="footer-wrap">
        <div className="footer-container">
          <div className='footer-left'>
            <h1>HOT BODY</h1>
  
            <div className="footer-mid">
              <ul className="footer-menu-lists">
                <li>About</li>
                <li>Community</li>
                <li>PT</li>
                <li>Group</li>
                <li>Subscribe</li>
                <li>Profile</li>
              </ul>
              <p>&copy; 2024 All right reserved by hot body</p>
            </div>
          </div>
  
          <ul className='footer-right'>
            <li>
              <img src={TelIcon} alt="tel" />
              TEL : +82 ) 010-XXXX-XXXX
            </li>
            <li>
              <img src={MailIcon} alt="mail" />
              E-Mail : hotbody@gmail.com
            </li>
          </ul>
        </div>
      </div>
    );
  };
   */
  export default Footer;
  