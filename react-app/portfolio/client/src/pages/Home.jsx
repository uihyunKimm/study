import React, {useState} from "react";
import styles from "../style/Home.module.scss"
import HomeContent from "../components/HomeContent";
import HomeTextLoop from  "../components/HomeTextLoop"
import Card from "../components/Card";
import Profile from "../components/Profile";



const Home = () => {
    return (
        <div className = { styles.wrap }>
            <div className={ styles.container }>
                <article className={styles.home }>
                    <HomeContent/>
                    <Card/>
                    <Profile/>
                </article>
            </div>
        </div>
    );
};

export default Home;