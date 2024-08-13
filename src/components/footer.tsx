import '../styles/footer.css'
import '../styles/main.css'
import '../styles/follow.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function Footer() {
    const { t } = useTranslation('footer');


    return (<>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#219aaf" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        <footer>
            <section>
                <div className="logoo">
                    <img src="\src\assets\logo.jpg" alt="inGodx logo" />
                    <h3><span className="godx"></span>in<span className="in">Go</span><span className="godx"></span>dx</h3>
                </div>
                <article className='footer-links'>
                    <div className="main-card">
                        <h1>{t("footer.links.title")}</h1>
                        <ul>
                            <li><Link to='/'>{t("footer.links.home")}</Link></li>
                            <li><Link to='/Delivery'>{t("footer.links.delivery")}</Link></li>
                            <li><Link to="/Market">{t("footer.links.market")}</Link></li>
                            <li><Link to='About' >{t("footer.links.about")}</Link></li>
                        </ul>
                    </div>

                    {/* sociale media links */}
                    <div className="main-card">
                        <h1 className='follow-margin'>{t("footer.follow-us.title")}</h1>

                        {/*    <ul className="example-2">

                            <li className="icon-content">
                                <a href="https://www.facebook.com/share/siaWaWq96w1Ex1Sf/?mibextid=qi2Omg" aria-label="Facebook" data-social="facebook">
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.049-8-8.049-4.418 0-8 3.603-8 8.049 0 3.988 2.918 7.288 6.75 7.931v-5.625h-2.03v-2.306h2.03v-1.724c0-2.007 1.194-3.107 3.022-3.107.876 0 1.822.156 1.822.156v2.001h-1.027c-1.013 0-1.328.629-1.328 1.272v1.402h2.25l-.36 2.306h-1.89v5.625c3.832-.643 6.75-3.943 6.75-7.931z"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="tooltip">Facebook</div>
                            </li>

                            <li className="icon-content">
                                <a href="https://whatsapp.com/" aria-label="WhatsApp" data-social="whatsapp">
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-whatsapp"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M13.601 2.399C12.13.927 10.129 0 7.999 0 3.589 0 0 3.589 0 7.999c0 1.41.37 2.785 1.076 3.994L0 16l4.085-1.068c1.176.646 2.5.988 3.914.988 4.409 0 7.999-3.589 7.999-7.999 0-2.131-.927-4.131-2.397-5.601zm-5.602 11.373c-1.297 0-2.561-.345-3.661-.997l-.26-.154-2.424.634.646-2.374-.168-.278c-.664-1.098-1.014-2.362-1.014-3.658 0-3.924 3.188-7.113 7.113-7.113 1.897 0 3.678.738 5.019 2.078 1.342 1.342 2.078 3.122 2.078 5.019.001 3.924-3.187 7.113-7.113 7.113zm3.799-5.584c-.207-.104-1.231-.61-1.422-.682-.191-.07-.331-.104-.472.104-.14.207-.543.682-.666.822-.122.14-.244.157-.451.052-.207-.104-.873-.321-1.663-1.024-.615-.549-1.031-1.231-1.153-1.437-.121-.207-.013-.318.091-.422.093-.092.207-.24.311-.36.104-.121.139-.207.207-.345.069-.138.034-.26-.017-.363-.052-.104-.472-1.135-.646-1.552-.17-.413-.344-.356-.472-.362l-.401-.007c-.121 0-.318.046-.484.207-.165.161-.636.623-.636 1.516 0 .893.65 1.754.74 1.876.091.121 1.279 1.947 3.098 2.733.433.187.77.298 1.034.38.434.138.83.119 1.144.072.349-.052 1.073-.439 1.225-.864.152-.425.152-.788.106-.863-.046-.075-.184-.121-.391-.224z"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="tooltip">WhatsApp</div>
                            </li>

                            <li className="icon-content">
                                <a href="https://github.com/gitlakbih/ingodx_frontend" aria-label="GitHub" data-social="github">
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"
                                    // xml:space="preserve"
                                    >
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="tooltip">GitHub</div>
                            </li>
                            <li className="icon-content">
                                <a
                                    href="https://www.instagram.com/in_godx?igsh=NGR3NmZ1ZjhnOWZ3"
                                    aria-label="Instagram"
                                    data-social="instagram"
                                >
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    // xml: space="preserve"
                                    >
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="tooltip">Instagram</div>
                            </li>


                        </ul>
                         */}
                        <ul>
                            <li><a href="https://www.instagram.com/in_godx?igsh=NGR3NmZ1ZjhnOWZ3" aria-label="Instagram" data-social="instagram">{t("footer.follow-us.instagram")} </a></li>
                            <li><a href="https://www.facebook.com/share/siaWaWq96w1Ex1Sf/?mibextid=qi2Omg" aria-label="Facebook" data-social="facebook">{t("footer.follow-us.facebook")}</a></li>
                            <li><a href="https://wa.me/+212711123042" aria-label="Whatsapp" data-social="Whatsapp">{t("footer.follow-us.whatsapp")}</a></li>
                        </ul>
                    </div>
                    <div className="main-card">
                        <h1>{t("footer.Contact-us.title")}</h1>
                        <ul>
                            <li><a href="">ingodxlivrison@gmail.com</a></li>
                            <li><a href="https://wa.me/+212711123042" aria-label="Whatsapp" data-social="Whatsapp">+212711123042</a></li>
                        </ul>
                    </div>
                </article>
                {/* this comment below is a input for email update messages/ it not ready yet for there role */}

                {/* <article className='left-div'>
                    <div className='email  h-auto w-a '>
                    <h3 className='text-white p-2 text-b text-xl '>Stay updated on News :</h3>
                    <div className='rounded-full form-div bg-white '>
                    <input className='outline
                    p-3 border-none rounded-full '
                    type="email" placeholder='Email' id='email' />
                    <input className='btn rounded-full' type="submit" value="Submit" />
                    </div>
                    </div>
                    </article> */}
            </section>

            <hr className="footer-hr" />
            <div className='rights'>
                <h3>© inGodx 2024. {t("footer.rights")}</h3>
                <h3><a href="#"><u>{t("footer.team")}</u></a></h3>
            </div>

        </footer>
    </>
    )
}

export default Footer;