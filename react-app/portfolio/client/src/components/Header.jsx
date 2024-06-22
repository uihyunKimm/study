import React, { useState, useRef } from "react";
import styles from "./../style/Header.module.scss"
import { Link } from "react-router-dom";

/* 
const [ariaExpanded, setAriaExpanded] = useState('true');
const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".header__nav");

if (headerToggle) {
    headerToggle.addEventListener("click", () => {
    headerNav.classList.toggle("show");
    headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aria-expanded", "false")
        : headerToggle.setAttribute("aria-expanded", "true");
    });
} */
    const headerNav = [
      {
          title: "intro",
          url: "#intro",
      },
      {
          title: "skill",
          url: "#skill",
      },
      {
          title: "site",
          url: "#site",
      },
      {
          title: "portfolio",
          url: "#port",
      },
      {
          title: "contact",
          url: "#contact",
      },
  ];
const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };
    return (
      <header id={styles.header} role="banner">
        <div className={styles.container}>
          <div className={styles.contents}>
            <a href="/">로고</a>
            <a href="mailto:dmlxld@gmail.com" target="_blank">dmlxld@gmail.com</a>
            <p><span className={styles.navigation}>2024 <strong>Portfolio</strong></span></p>
          </div>
          <div className={styles.contents_low}>
            <span className={styles.contents_low_low}>화면기획/ 웹디자인 출신 개발자</span>
            <nav className={`${styles.header__nav} ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
              <ul>
                {headerNav.map((nav, key) => (
                  <li key={key}>
                      <a href={nav.url}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div 
              className={styles.header__nav__mobile}
              id="headerToggle" 
              aria-controls="primary-menu" 
              aria-expanded={show ? "true" : "false"}
              role="button" 
              tabindex="0"
              onClick={toggleMenu}
              >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;


/* const navLinks = [
    {
      link: "/",
      menuName: "홈",
    },
    {
      link: "/community",
      menuName: "커뮤니티",
    },
    {
      link: "/pt",
      menuName: "PT",
    },
    {
      link: "/group",
      menuName: "모임",
    },
    {
      link: "/sub",
      menuName: "구독",
    },
  ];
  
  const Navbar = () => {
    const navigate = useNavigate();
    const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();

    const handleLogout = () => {
      setUser({});
      setIsAuthenticated(false);
      localStorage.removeItem("accessToken");
      window.location.reload();
    };
  
    toast.info('로그아웃 되었습니다.');
  
    return (
      <nav className="navContainer">
        <img
          src={Logo}
          alt="logo"
          className="nav-logo"
          onClick={() =>  navigate("/") }
        />
  
        <div className="linkWrap">
          {navLinks.map((nav) => (
            <span
              key={nav.menuName}
              to={`${nav.link}`}
              className={({ isActive }) =>
                isActive ? "navActive navlink" : "navlink"
              }
            >
              {nav.menuName}
            </span>
          ))}
          {isAuthenticated && (
            <NavLink
              key={"마이페이지"}
              to={"/profile/account"}
              className={({ isActive }) =>
                isActive ? "navActive navlink" : "navlink"
              }
            >
              마이페이지
            </NavLink>
          )}
        </div>
        {isAuthenticated ? (
          <button className="navButton" onClick={handleLogout} >
            로그아웃
          </button>
        ) : (
          <button className="navButton" onClick={() => navigate("/login")}>
            로그인 / 회원가입
          </button>
        )}
      </nav>
    );
  }; */