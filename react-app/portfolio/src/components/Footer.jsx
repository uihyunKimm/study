import React from "react";
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>하이
                <div className={styles.inner_content}>
                    <h3 className={styles.title}>푸터임</h3>
                </div>
            </div> 
        </footer>
    );
};

export default Footer;