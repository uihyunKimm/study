import React from "react";
import styles from "./HomeContainer.module.scss"

const HomeContainer = () => {
    return (
        <article className={styles.main}>
            <div className={styles.title}>
                <div className={styles.title_inner}>
                    <strong className={styles.title_inner_text}>군더더기 없는 인터페이스를 좋아하는</strong>
                    <div className={styles.title_inner_logo}></div>
                </div>
            </div>
        </article>
    );
};

export default HomeContainer;