import React, {useState} from "react";
import styles from "../style/Site.module.scss"


const Site = () => {

  return (
    <section className={styles.sitebody}>
      <div className={styles.site__inner}>
        <h2 className={styles.site__title}>Site coding <em>나의 작업물</em></h2>
        <div className={styles.site__wrap}>
          <article className={styles.site__item}>
              <span className={styles.num}>1.</span>
              <div className={styles.text}>
                  <div>Make</div>
                  <div>site compliant with</div>
                  <div>webstandard</div>
              </div>
              <h3 className={styles.title}>웹 표준을 준수한 사이트 제작</h3>
              <div className={styles.btn}>
                  <span>code</span>
                  <span>view</span>
              </div>
              <div className={styles.info}>
                  <span>site coding</span>
                  <span>production period : two days</span>
                  <span>use stack : html5/css3, CSS Variable, Vite</span>
              </div>
          </article>
          <article className={styles.site__item}>
              <span className={styles.num}>2.</span>
              <div className={styles.text}>
                  <div>Make</div>
                  <div>site compliant with</div>
                  <div>react.js</div>
              </div>
              <h3 className={styles.title}>리액트를 이용한 사이트 제작</h3>
              <div className={styles.btn}>
                  <span>code</span>
                  <span>view</span>
              </div>
              <div className={styles.info}>
                  <span>site coding</span>
                  <span>production period : two days</span>
                  <span>use stack : HTML5/CSS3, CSS Variable, Vite</span>
              </div>
          </article>
          <article className={styles.site__item}>
              <span className={styles.num}>3.</span>
              <div className={styles.text}>
                  <div>Make</div>
                  <div>site compliant with</div>
                  <div>vue.js</div>
              </div>
              <h3 className={styles.title}>뷰를 이용한 사이트 제작</h3>
              <div className={styles.btn}>
                  <span>code</span>
                  <span>view</span>
              </div>
              <div className={styles.info}>
                  <span>site coding</span>
                  <span>production period : two days</span>
                  <span>use stack : vue.js, CSS Variable, vite</span>
              </div>
          </article>
          <article className={styles.site__item}>
            <span className={styles.num}>4.</span>
            <div className={styles.text}>
                <div>Make</div>
                <div>site compliant with</div>
                <div>next.js</div>
            </div>
            <h3>넥스트를 이용한 사이트 제작</h3>
            <div className={styles.btn}>
                <span>code</span>
                <span>view</span>
            </div>
            <div className={styles.info}>
                <span>site coding</span>
                <span>production period : two days</span>
                <span>use stack : next.js, CSS Variable, Vite</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Site;
