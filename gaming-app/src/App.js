import {BrowserRouter, Link, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import './pages/Home/home.css';

/*FontAwesome*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faShield} from '@fortawesome/free-solid-svg-icons'
import {faTruck} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faMobileScreen} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faUserTie} from '@fortawesome/free-solid-svg-icons'
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import {faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import Home from "./pages/Home/Home";
library.add(faArrowRight, faBars, faXmark, faUserTie, faTruck,faCartArrowDown,faMobileScreen, faShield,faHeadphones,faHandHoldingHeart);
/*FontAwesome*/

function App() {
    const [isLogged, setIsLogged] = useState(true);

    return (
        <BrowserRouter>
            <nav>
                <div>
                    <Link to={"/"}>
                        <img src="/images/Home/logo.png" alt="logo"/>
                    </Link>
                </div>
                {!isLogged ? (
                    <div>
                        <div className={"login-account"}>
                            <Link to={"/login"} style={{textDecoration: "none"}}>
                                <span style={{paddingRight: 15, fontSize: 20}}>Login</span>
                                <FontAwesomeIcon
                                    icon={"user-tie"}
                                    className={"login"}
                                    size={"lg"}
                                />
                            </Link>
                        </div>
                    </div>
                ) : (
                    <span style={{cursor: "pointer", fontSize: 20}}
                          // onClick={() => logout()}
                    >Logout</span>
                )}
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <footer>
                <div className={"delivery"}>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"truck"}
                            className="color-white"
                        />
                        <span className={"text"}>Brza dostava</span>
                    </span>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"cart-arrow-down"}
                            className="color-white"
                        />
                        <span className={"text"}>Pick up lokacija</span>
                    </span>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"mobile-screen"}
                            className="color-white"
                        />
                        <span className={"text"}>Brzo i lako</span>
                    </span>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"shield"}
                            className="color-white"
                        />
                        <span className={"text"}>Bezbjedno plaćanje</span>
                    </span>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"headphones"}
                            className="color-white"
                        />
                        <span className={"text"}>1995 Webshop Call <br/> center</span>
                    </span>
                    <span className={"delivery-span"}>
                        <FontAwesomeIcon
                            icon={"hand-holding-heart"}
                            className="color-white"
                        />
                        <span className={"text"}>Širok asortiman</span>
                    </span>
                </div>
                <div className={"more-info"}>
                    <div className={"information"}>
                        <div>
                            <FontAwesomeIcon
                                icon={"arrow-right"}
                                className="color-white"
                            />
                            <span>Načini plaćanja</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={"arrow-right"}
                                className="color-white"
                            />
                            <span>Pitanja i odgovori</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={"arrow-right"}
                                className="color-white"
                            />
                            <span>Uslovi korišćenja</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={"arrow-right"}
                                className="color-white"
                            />
                            <span>Politika privatnosti</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={"arrow-right"}
                                className="color-white"
                            />
                            <span>Prijava webshopa</span>
                        </div>
                    </div>
                    <div className={"ecommerce"}>
                        <img src="/images/Home/logo.png" alt=""/>
                        <h2>Gaming Web Shop</h2>
                    </div>
                    <div className={"webshop"}>
                        <p>Webshop korisnički servis</p>
                        <p>19995</p>
                        <p>Email</p>
                        <p>webshop@gamingapp.me</p>
                        <p>PIB</p>
                        <p>02227312</p>
                    </div>
                </div>
                <div className={"cards"}>
                    <span>
                         <img src="/images/Home/visa.png" alt=""/>
                    </span>
                    <span>
                         <img src="/images/Home/master-card.png" alt=""/>
                    </span>
                    <span>
                         <img src="/images/Home/maestro.png" alt=""/>
                    </span>
                    <span>
                         <img src="/images/Home/american.jpg" alt=""/>
                    </span>
                    <span>
                         <img src="/images/Home/allsecure.jpg" alt=""/>
                    </span>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default App;
