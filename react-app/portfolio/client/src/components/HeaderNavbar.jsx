import Logo from "/images/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/";
import {toast} from 'react-toastify';

const navLinks = [
  {
    link: "#intro",
    menuName: "INTRO",
  },
  {
    link: "#skill",
    menuName: "SKILL",
  },
  {
    link: "#site",
    menuName: "SITE",
  },
  {
    link: "#portfolio",
    menuName: "PORTFOLIO",
  },
  {
    link: "#contact",
    menuName: "CONTACT",
  },
];

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();

  {/* const handleLogout = () => {
    setUser({});
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
    navigate('/');
    toast.info('로그아웃 되었습니다.');
    }; */}

  return (
    <nav className="navContainer">
      <img
        src={Logo}
        alt="logo"
        className="nav-logo"
        onClick={() => navigate("/")}
      />

      <div className="linkWrap">
        {navLinks.map((nav) => (
          <NavLink
            key={nav.menuName}
            to={`${nav.link}`}
            className={({ isActive }) =>
              isActive ? "navActive navlink" : "navlink"
            }
          >
            {nav.menuName}
          </NavLink>
        ))}
      </div>
      {/* {isAuthenticated ? (
        <button className="navButton" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <button className="navButton" onClick={() => navigate("/login")}>
          로그인 / 회원가입
        </button>
      )} */}
    </nav>
  );
};

export default HeaderNavbar;
