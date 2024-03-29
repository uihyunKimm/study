import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.Header_}>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <h3>로고</h3>
                    <p>임시 이메일</p>
                    <span className={styles.navigation}>2024 <strong>Portfolio</strong></span>
                </div>
                <div className={styles.contents_low}>
                    <span className={styles.contents_low_low}>화면기획/ 웹디자인 출신 개발자</span>
                </div>
            </div>
        </header>
    );
};

export default Header;