import '../styles/main.css'
import '../styles/introduction.css'
import '../styles/vedio.css'
import '../styles/offers.css'
import '../styles/advantages.css'
import vedio from "../assets/WhatsAppbb.mp4"
import bisicle from "../assets/bisicle.jpg"
import truck from "../assets/truck.jpg"
import homeDelivery from "../assets/intill-home.jpg"
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// import { useState } from 'react'
// import checkLogin from './CheckLogin'


function Home() {
    const { t } = useTranslation('main');

    
    const Lang = document.documentElement.lang; // Get the language from the HTML tag
    interface WordsMap {    // Define the type for the wordsMap object
        [key: string]: string[];
    }
    const wordsMap: WordsMap = {    // Define an object with the words for each language
        ar: ['مجتمعك', 'توصيلاتك', 'طريقك'],
        en: ['Community', 'Deliveries', 'Way'],
        fr: ['Communauté', 'Livraisons', 'Chemin'],
        // Add more language codes and word arrays as needed
    };

    // Get the words array based on the language
    const words = wordsMap[Lang] || ['Community', 'Deliveries', 'Way']; // Default to English words

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [text] = useTypewriter({
        words,
        loop: true,  // Change empty object to true to enable looping
    });


    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return (
        <main>
            <BackgroundGradientAnimation>
                <div
                    // className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none "
                    className="absolute z-50 inset-0 "
                >
                    <section className="introduction">

                        <h1 >
                            <span className="bold-8 godx">{t('home.introduction.title.part1')}</span>
                            <span className="bold-8 in">{t('home.introduction.title.part2')}</span>
                            <span className="bold-8 godx">{t('home.introduction.title.part3')}  </span>
                            {(Lang == "ar") ? null :<span> {t('home.introduction.title.part4')}  </span> }
                            {width < 1025 && <br />}
                            <span className='text-purple-500'>{text}</span>
                            <Cursor />
                        </h1>
                        <p>
                        {t('home.introduction.subtitle1')}  
                        <span className="godx"> {t('home.introduction.title.part1')}</span>
                        <span className="in">{t('home.introduction.title.part2')}</span>
                        <span className="godx">{t('home.introduction.title.part3')}</span>
                        </p>
                        <p>
                        {t('home.introduction.subtitle2')} 
                        </p>
                        <div>

                            <Link to='/TsakherLiya'><button type="button" className="btn">{t('home.introduction.setOrderButton')} </button></Link>


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
                    <h1>{t('home.offers.title')}</h1>
                </div>

                <article className="cardContainer">
                    <div className="cards">
                        <div className="text">
                            <h2 className="title">{t('home.offers.homeDelivery.title')}</h2>
                            <p className="paragraph">
                            {t('home.offers.homeDelivery.description')}</p>
                            <Link to='/TsakherLiya'><button type="button" className="btn">{t('home.offers.homeDelivery.setNewOrderButton')}</button></Link>
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
                            <h2 className="title">{t('home.offers.ingodx.title')}</h2>
                            <p className="paragraph">
                            {t('home.offers.ingodx.description')}                            </p>
                            <Link to='/Delivery'><button type="button" className="btn">{t('home.offers.ingodx.applyNowButton')}</button></Link>

                        </div>
                    </div>
                </article>

                <article className="cardContainer">
                    <div className="therd cards">
                        <div className="text">
                            <h2 className="title">{t('home.offers.businessPartner.title')}</h2>
                            <p className="paragraph">
                            {t('home.offers.businessPartner.description')}                            </p>
                            <Link to='/Market'> <button type="button" className="btn">{t('home.offers.businessPartner.placeNewOrderButton')}</button></Link>

                        </div>
                        <div className="picture">
                            <img src={truck} width="100%" alt="bisicle" />
                        </div>
                    </div>
                </article>
            </section>


            <section className="advantages">
                <h2>
                {t('home.advantages.title')}
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
                            <h3>{t('home.advantages.cards.quickAndEasy.title')}</h3>
                            <p>{t('home.advantages.cards.quickAndEasy.description')}</p>
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
                            <h3>{t('home.advantages.cards.securePlatform.title')}</h3>
                            <p>{t('home.advantages.cards.securePlatform.description')}</p>
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
                            <h3>{t('home.advantages.cards.expertSupport.title')}</h3>
                            <p>{t('home.advantages.cards.expertSupport.description')}</p>
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
                            <h3>{t('home.advantages.cards.transparency.title')}</h3>
                            <p>
                            {t('home.advantages.cards.transparency.description')}                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;