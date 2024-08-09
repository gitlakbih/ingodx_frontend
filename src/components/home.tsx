import '../styles/main.css'
import '../styles/introduction.css'
import '../styles/vedio.css'
import '../styles/offers.css'
import '../styles/advantages.css'
import vedio from "../assets/WhatsAppb.mp4"
import moto from "../assets/moto-bike.jpg"
import bisicle from "../assets/bisicle.jpg"
import truck from "../assets/truck.jpg"
import homeDelivery from "../assets/intill-home.jpg"
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
// import checkLogin from './CheckLogin'
// import { useEffect, useState } from 'react'




function Home() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [text] = useTypewriter({
        words: ['Community', 'Deliveries', 'Way',],
        loop: true,  // Change empty object to true to enable looping

    });



    // useEffect(() => {
    //     async function fetchData() {
    //         const loggedIn = await checkLogin();
    //         setIsLoggedIn(loggedIn);
    //     }
    //     fetchData();
    // }, []);



    return (
        <main>
            <BackgroundGradientAnimation>
                <div
                // className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none "
                className="absolute z-50 inset-0 pointer-events-none "
                >
                    <section className="introduction">

                        <h1 >
                            <span className="bold-8 godx">In</span>
                            <span className="bold-8 in">Go</span>
                            <span className="bold-8 godx">dx</span>
                            <span> Your  </span> 
                            {/* <br /> */}
                            <span className='text-purple-500'>{text}</span>
                            <Cursor />
                        </h1>
                        <p>
                            With  <span className="godx">in</span><span className="in">Go</span><span className="godx">dx</span>
                        </p>
                        <p>
                            Get Whatever You Need, Whenever You Like, From Wherever You Want
                        </p>
                        <div>
                            <a href="/USER%20V-0.0.0/IDE.HTML">
                                <Link to='/Login?mode=signup'><button id='#get' type="button" className="btn">Get Started</button></Link>

                            </a>
                        </div>
                    </section>
                </div>
            </BackgroundGradientAnimation>

                    <section className="video-container">
                        <div>
                            <link
                                rel="stylesheet"
                                href="https://cdn.plyr.io/3.6.8/plyr.css"
                            />
                            <div className="video">
                                <video id="player" playsInline autoPlay controls>
                                    <source
                                        src={vedio}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            <script src="https://cdn.plyr.io/3.6.8/plyr.js"></script>
                            <script src="plyr.js"></script>
                            {/* <script>
                const player = new Plyr('video', { captions: { active: true } });
              </script> */}
                        </div>
                    </section>





            <section className="offers">
                <div className="sec-title">
                    <h1>what we offer</h1>
                </div>

                <article className="cardContainer">
                    <div className="cards">
                        <div className="text">
                            <h2 className="title">Efficient Home Delivery Services: Revolutionizing Convenience and Comfort.</h2>
                            <p className="paragraph">
                                Home delivery services have revolutionized shopping, offering unmatched convenience. With a few clicks, customers can receive groceries, meals, and more at their doorstep quickly and reliably. Advanced logistics and real-time tracking ensure flexible and efficient delivery, fitting seamlessly into busy lives. This integration boosts consumer satisfaction and helps businesses expand their reach.
                            </p>
                            <Link to='/TsakherLiya'><button type="button" className="btn">Sign UP</button></Link>

                        </div>
                        <div className="picture">
                            <img src={homeDelivery} width="100%" alt="bisicle" />
                        </div>
                    </div>
                </article>

                <article className="cardContainer">
                    <div className="scend cards">
                        <div className="picture">
                            <img src={bisicle} width="100%" alt="bisicle" />
                        </div>
                        <div className="text">
                            <h2 className="title">Delivering Excellence: Working with Ingodx Company.</h2>
                            <p className="paragraph">
                                Working with Ingodx Company offers a dynamic and rewarding experience for delivery professionals. Ingodx is a leader in efficiency and customer satisfaction, providing competitive pay, flexible schedules, and a supportive work environment. Advanced technology and logistics ensure smooth operations, allowing drivers to excel in their roles. Joining Ingodx means being part of a team dedicated to delivering excellence.
                            </p>
                            <Link to='/Delivery'><button type="button" className="btn">Sign UP</button></Link>

                        </div>
                    </div>
                </article>

                <article className="cardContainer">
                    <div className="therd cards">
                        <div className="text">
                            <h2 className="title">Ingodx: Your Reliable Business Delivery Partner</h2>
                            <p className="paragraph">
                                Ingodx provides businesses with reliable, efficient delivery services. Focused on punctuality and precision, Ingodx ensures timely and secure package arrivals. Advanced logistics and real-time tracking offer transparency and peace of mind. Partnering with Ingodx boosts customer satisfaction and supports business growth.
                            </p>
                            <Link to='/Market'> <button type="button" className="btn">Sign UP</button></Link>

                        </div>
                        <div className="picture">
                            <img src={truck} width="100%" alt="bisicle" />
                        </div>
                    </div>
                </article>
            </section>


            <section className="advantages">
                <h2>
                    Experience <span>The inGodx Advantage</span>
                </h2>
                <div className="advantage-cards">
                    <div className="card">
                        <div className="left-side">
                            <div className="icon">
                                <img
                                    src="https://img.icons8.com/?size=100&id=9209&format=png&color=000000"
                                    alt="Quick & Easy to Use"
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <h3>Quick & Easy to Use</h3>
                            <p>Customers can schedule deliveries quickly online, avoiding traditional delays and ensuring a smooth experience.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left-side">
                            <div className="icon">
                                <img
                                    src="https://img.icons8.com/?size=100&id=24826&format=png&color=000000"
                                    alt="Secure Platform"
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <h3>Secure Platform</h3>
                            <p>Our SOC-2 Type 2 certified platform, with ongoing penetration testing, ensures your deliveries and information remain secure.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left-side">
                            <div className="icon">
                                <img
                                    src="https://img.icons8.com/?size=100&id=a8cZMQaCOiz0&format=png&color=000000"
                                    alt="Expert Support"
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <h3>Expert Support</h3>
                            <p>A dedicated support team is available to assist with all delivery needs, providing seamless service and customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left-side">
                            <div className="icon">
                                <img
                                    src="https://img.icons8.com/?size=100&id=186&format=png&color=000000"
                                    alt="Transparency at Every Step"
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <h3>Transparency at Every Step</h3>
                            <p>
                                Enjoy real-time tracking of deliveries, with complete visibility into package status, ensuring reliability and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;