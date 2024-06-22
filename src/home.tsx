import './main.css'
import './introduction.css'
import './vedio.css'
import './offers.css'
import './advantages.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';



function Home() {
    const [text ] = useTypewriter({
        words: ['Community', 'Deliveries', 'Way'],
        loop: true,  // Change empty object to true to enable looping
    });

    return (
        <main>
            <section className="introduction">
                <h1>
                    <span className="godx">In</span>
                    <span className="in">Go</span>
                    <span className="godx">dx</span>
                    <span> Your  </span>
                    <span className='text-purple-600'>
                        {text}
                    </span>
                    <Cursor/>
                </h1>
                <p>
                    welcome to <span className="in">in</span>
                    <span className="godx">Godx</span>
                </p>
                <p>
                    whit <span className="in">in</span>
                    <span className="godx">Godx</span> you can git what ever you want from
                    anywhere you need{' '}
                </p>
                <div>
                    <a href="/USER%20V-0.0.0/IDE.HTML">
                        <button type="button" className="btn">Get Started</button>
                    </a>
                </div>
            </section>

            <section className="video-container">
                <div>
                    <link
                        rel="stylesheet"
                        href="https://cdn.plyr.io/3.6.8/plyr.css"
                    />
                    <div className="video">
                        <video id="player" playsInline autoPlay controls>
                            <source
                                src="/src/assets/Crypto Donations.mp4"
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
                            <h2 className="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloribus incidunt consequatur
                                fugiat maxime vitae magnam, ex, esse ipsum corporis recusandae cumque laborum ipsam a excepturi ea
                                quibusdam quasi inventore! Repellendus error provident sapiente voluptatibus inventore, minus
                                expedita necessitatibus, odit, pariatur magni sequi rerum libero quaerat.
                            </p>
                            <button type="button" className="btn">Sign UP</button>
                        </div>
                        <div className="picture">
                            <img src="/src/assets/intill-home.jpg" width="100%" alt="bisicle" />
                        </div>
                    </div>
                </article>

                <article className="cardContainer">
                    <div className="scend cards">
                        <div className="picture">
                            <img src="/src/assets/bisicle.jpg" width="100%" alt="bisicle" />
                        </div>
                        <div className="text">
                            <h2 className="title">Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</h2>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloribus incidunt consequatur
                                fugiat maxime vitae magnam, ex, esse ipsum corporis recusandae cumque laborum ipsam a excepturi ea
                                quibusdam quasi inventore! Repellendus error provident sapiente voluptatibus inventore, minus
                                expedita necessitatibus, odit, pariatur magni sequi rerum libero quaerat.
                            </p>
                            <button type="button" className="btn">Sign UP</button>
                        </div>
                    </div>
                </article>

                <article className="cardContainer">
                    <div className="therd cards">
                        <div className="text">
                            <h2 className="title">Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</h2>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque doloribus incidunt consequatur
                                fugiat maxime vitae magnam, ex, esse ipsum corporis recusandae cumque laborum ipsam a excepturi ea
                                quibusdam quasi inventore! Repellendus error provident sapiente voluptatibus inventore, minus
                                expedita necessitatibus, odit, pariatur magni sequi rerum libero quaerat.
                            </p>
                            <button type="button" className="btn">Sign UP</button>
                        </div>
                        <div className="picture">
                            <img src="/src/assets/truck.jpg" width="100%" alt="bisicle" />
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
                            <p>Donors initiate these gifts in minutes online instead of taking weeks offline.</p>
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
                            <p>SOC-2 Type 2 with ongoing penetration testing to keep donors and nonprofits safe.</p>
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
                            <p>Real people dedicated to supporting nonprofits and donors to facilitate non-cash giving.</p>
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
                                Ability to track donor details, gift status, and compliance in order to steward and cultivate your
                                supporters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cta-button">
                    <button>Book a Demo</button>
                </div>
            </section>
        </main>
    )
}

export default Home;