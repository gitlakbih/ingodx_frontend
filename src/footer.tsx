import './footer.css'
import './main.css'

function Footer() {
    return (
        <footer>
            <section>
                <article className='left-div'>
                <div className="logoo">
                    <img src="\src\assets\logo.jpg" alt="inGodx logo" />
                    <h3>in<span className="in">Go</span><span className="godx">dx</span></h3>
                </div>
                <div className='email  h-auto w-a '>
                    <h3 className='text-white p-2 text-b text-xl '>Stay updated on News :</h3>
                    <div className='rounded-full form-div bg-white '>
                        <input className='outline
                        p-3 border-none rounded-full '
                            type="email" placeholder='Email' id='email' />
                        <input className='btn rounded-full' type="submit" value="Submit" />
                    </div>
                </div>
            </article>
            <article className='right-div'>
                <div className="main-card">
                    <h1>Links</h1>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Delevry</a></li>
                        <li><a href="">Market</a></li>
                        <li><a href="">Bring Me</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </div>
                <div className="main-card">
                    <h1>Contact</h1>
                    <ul>
                        <li><a href="">address</a></li>
                        <li><a href="">phone number</a></li>
                        <li><a href="">Email profitional</a></li>
                    </ul>
                </div>
                <div className="main-card">
                    <h1>Join Us</h1>
                    <ul>
                        <li><a href="">Email profitional</a></li>
                    </ul>
                </div>
                <div className="main-card">
                    <h1>Follow Us</h1>
                    <ul>
                        <li><h2>icons will be applicated as soon as possible</h2></li>
                    </ul>
                </div>
            </article>
            </section>
            
                <hr />
                <div className='rights'>
                    <h3>© inGodx 2024. All rights reserved</h3>
                    <h3><a href="#"><u>our team</u></a></h3>
                </div>

        </footer>
    )
}

export default Footer;