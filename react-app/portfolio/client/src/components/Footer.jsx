import React from "react";
import styles from "./../style/Footer.module.scss"

const Footer = () => {
  const footerText = [
      {
          title: "youtube",
          desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
          link: "https://www.youtube.com/@Webstoryboy",
      },
      {
          title: "github",
          desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
          link: "https://github.com/webstoryboy",
      },
      {
          title: "blog",
          desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
          link: "https://webstoryboy.co.kr",
      },
      {
          title: "gsap",
          desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
          link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
      },
      {
          title: "react",
          desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
          link: "https://github.com/webstoryboy/port2023-react",
      }
  ];
    return (
        <footer className={styles.footer__body} >
          <div className={styles.container}>
            <div className={styles.footer__inner}>
              <div className={styles.footer__text}>
                <span>webstoryboy</span>
                <span>© webs</span>
              </div>
              <div className={styles.footer__info}>
                <div className={styles.left}>
                  <div className={styles.title}>
                      <span>sign up</span>
                  </div>
                  <p className={styles.desc}>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className={styles.right}>
                  <h3>social</h3>
                  <ul className={styles.footer_right}>
                    {footerText.map((footer, key) => (
                      <li key={key}>
                          <a href={footer.link}>{footer.title}</a>
                          <em>{footer.desc}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.footer__right}>
                © 2024 kimuihyun<br />
                이 사이트는 리액트를 이용하여 제작하였습니다.
              </div>
            </div>
          </div>
        </footer>
    );
};

  export default Footer;
  