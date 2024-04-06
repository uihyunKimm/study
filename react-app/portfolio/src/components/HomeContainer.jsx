import React, {useState} from "react";
import styles from "./HomeContainer.module.scss"
import Home from "./Home";
import Card from "./Card";




const HomeContainer = () => {
    return (
        <article className={styles.main}>
            <Home/>
            <Card/>
        </article>
    );
};

export default HomeContainer;