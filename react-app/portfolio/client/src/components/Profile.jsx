import React, {useState} from "react";
import styles from "../style/Profile.module.scss"



const Profile = () => {
    return (
    <div>
        <img src="" alt="" title="" className={ styles.main2 } />
        <article className={styles.main }>
            <div className={ styles.profile }>안녕하세요! 웹 퍼블리셔 김의현입니다.
                <span className={ styles.aka }>
                    a.k.a, KUH
                </span>
            </div>
            좋아하면 더 잘한다는 마음으로 UI 개발 일을 하고 있습니다.
        </article>
    </div>
    );
};

export default Profile;