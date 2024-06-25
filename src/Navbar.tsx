import './navigation.css'
import './main.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Navbar() {


    // script.js
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } 
      else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }



    return (
        <nav id='navbar' className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="logo">
                <img src="\src\assets\logo.jpg" alt="inGodx logo" />
                <h3><span className="godx">in</span><span className="in">Go</span><span className="godx">dx</span></h3>
            </div>
            <div className='topnav' id='myTopnav'>
            <ul className="links">
                <li><Link to='/Profile'>PFL</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/Market">Market</Link></li>
                <li><Link to="/Delivery">Delivery</Link></li>
                <li><Link to = '/TsakherLiya'>Tsakher Liya</Link></li>
                <li><Link to='/About' >About</Link></li>
                <Link to='/Login'><button type="button" className="btn">Sign In</button></Link>
            </ul>
                      {/* <a  className="icon" onclick="myFunction()">
              <i className="fa fa-bars"></i>
            </a> */}
                    </div>
        </nav>

    )
};

export default Navbar;