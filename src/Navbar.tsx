import './navigation.css'
import './main.css'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="\src\assets\logo.jpg" alt="inGodx logo" />
                <h3><span className="godx">in</span><span className="in">Go</span><span className="godx">dx</span></h3>
            </div>
            <ul className="links">
                <li><a href="/inGodx/index.html">serves</a></li>
                <li><a href="">market</a></li>
                <li><a href="">get job</a></li>
                <li><a href="">bring me</a></li>
                <li><a href="">about us</a></li>
                <a href="/Login/IDE.HTML"><button type="button" className="btn">Sign In</button></a>
            </ul>
        </nav>

    )
};

export default Navbar;