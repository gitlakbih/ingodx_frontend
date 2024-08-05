import "../styles/navigation.css";
import "../styles/main.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

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

  //responsive navBar

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-icon");
    const nav = document.querySelector("#navbar");

    const toggleMenu = () => {
      if (nav) nav.classList.toggle("active");
    };

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    return () => {
      if (menuBtn) menuBtn.removeEventListener("click", toggleMenu);
    };
  }, []);


  return (
    //the className here is a condition to add a scrolling effect.
    <header className={scrolled ? "scrolled" : ""}>

      <Link to="/"><div className="logo">
        <img src="\src\assets\logo.jpg" alt="inGodx logo" />
        <h3>
          <span className="godx">in</span>
          <span className="in">Go</span>
          <span className="godx">dx</span>
        </h3>
      </div></Link>

      <nav >
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
          <li>
            <Link to="/Market">
              <div>Business</div>
            </Link>
          </li>
          <li>
            <Link to="/Delivery">
              <div>Delivery</div>
            </Link>
          </li>
          {/* <li><Link to = '/TsakherLiya'>Tsakher Liya</Link></li> */}
          <li>
            <Link to="/About">
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <button type="button" className="btn">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Navbar;
