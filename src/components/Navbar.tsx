import "../styles/navigation.css";
import "../styles/main.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation("navbar");

  // handling the scroll event to add a shadon when the page scrolled
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-icon");
    const nav = document.querySelector(".not-visible");
    const toggleMenu = () => {
      if (nav) nav.classList.toggle("visible");
    };

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    return () => {
      if (menuBtn) menuBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      {/* //the className here is a condition to add a scrolling effect. */}
      <header className={scrolled ? "scrolled" : ""}>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="inGodx logo" />
            <h3>
              <span className="godx">in</span>
              <span className="in">Go</span>
              <span className="godx">dx</span>
            </h3>
          </div>
        </Link>

        <nav className="head-navbar">
          <ul id="navbar">
            {/* //link is a tool to help to navigate to other  pages like a tag*/}
            {/* <li>
            <Link to="/Profile">
              <div>PFL</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Home</div>
            </Link>
          </li> */}
            {/* <li>
              <Link to="/Market">
                <div>{t('business')}</div>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/Delivery">
                <div>{t('delivery')}</div>
              </Link>
            </li> */}
            {/* <li><Link to = '/TsakherLiya'>Tsakher Liya</Link></li> */}
            {/* <li>
            <Link to="/About">
              <div>About</div>
            </Link>
          </li> */}
            <li>
              <div className="button-container">
                <Link to="/Login">
                  <button className="button">Login</button>
                </Link>
                <Link to="/Signup">
                  <button className="button">Signup</button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <div className="menu-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>

      <nav className="not-visible" id="side-bar">
        <ul className="visible-list">
          {/* //link is a tool to help to navigate to other  pages like a tag*/}
          {/* <li>
            <Link to="/Profile">
              <div>PFL</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Home</div>
            </Link>
          </li> */}
          <li>
            <Link to="/Market">
              <div>{t("business")}</div>
            </Link>
          </li>
          <li>
            <Link to="/Delivery">
              <div>{t("delivery")}</div>
            </Link>
          </li>
          {/* <li><Link to = '/TsakherLiya'>Tsakher Liya</Link></li> */}
          {/* <li>
            <Link to="/About">
              <div>About</div>
            </Link>
          </li> */}
          <li>
            <Link to="/Login">
              <button type="button" className="btn">
                {t("sign_in")}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
