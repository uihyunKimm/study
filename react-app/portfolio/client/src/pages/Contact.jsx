import React from "react";
import styles from "../style/Contact.module.scss"

const Contact = () => {
    return (
      <section className={styles.contact_body}>
    <div className={styles.contact__inner}>
        <h2 className={styles.contact__title}>Contact</h2>
        <div className={styles.contact__lines_top}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
        <div className={styles.contact__text}>
            <div className={styles.inner_text}>
                <div>
                    <a href="https://open.kakao.com/o/gM7YLzwf" target="_blank">KAKAO : Webstroyboy</a>
                </div>
                <div>
                    <a href="mailto:dmlxld@gmail.com" target="_blank">mail : dmlxld@gmail.com</a>
                </div>
            </div>
        </div>
        <div className={styles.contact__lines_bottom}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    </div>
</section>
    );
};

  export default Contact;
  