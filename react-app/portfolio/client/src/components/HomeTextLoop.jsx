import React, {useState} from "react";
import styles from "./../style/HomeTextLoop.module.scss"




const HomeContent = () => {
    return (
        <div class={styles.flowText} >
            <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
            <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
            <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
            <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
        </div>
    );
};

export default HomeContent;