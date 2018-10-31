import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {sections, portfolio} from "../data/constants";

import NavLink from "./NavLink";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        //don't display the names of empty sections
        let classRestauracje = sections.restauracje ? "" : "displayNone";
        let classPrzemyslowe = sections.przemyslowe ? "" : "displayNone";
        let classDomy = sections.domy ? "" : "displayNone";
        let classRenowacje = sections.renowacje ? "" : "displayNone";
        console.log(sections, classRestauracje);
        return (
            <Navbar id="top-navbar">
                <div className="container">
                    <Navbar.Header>
                        <Navbar.Toggle/>
                        {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">*/}
                        {/*<span className="sr-only">Toggle navigation</span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*</button>*/}
                        <Navbar.Brand id="nav-link-0" href="#home">
                            <img src="images/logo-small.png" alt="Zielona budowa - logo" id="logo-navbar"></img>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse id="navbar">
                        <div id="nav-panel-text">
                            <ul className="nav navbar-nav" id="nav-links">
                                <div className={classRestauracje}>
                                    <li className="nav-section-name">restauracje i&nbsp;hotele:</li>
                                </div>
                                <div className={classPrzemyslowe}>
                                    <li className="nav-section-name">obiekty przemysłowe:</li>
                                </div>
                                <li><a href="#" className="page-scroll" id="nav-link-2-0">malarnia proszkowa</a></li>

                                <div className={classDomy}>
                                    <li className="nav-section-name">domy i&nbsp;osiedla:</li>
                                </div>
                                <li><a href="#" className="page-scroll" id="nav-link-3-0">dom w&nbsp;porębie</a></li>

                                <div className={classRenowacje}>
                                    <li className="nav-section-name">renowacje:</li>
                                </div>
                                <li><a href="#" className="page-scroll" id="nav-link-5-0">sportowa 20</a></li>
                                <li className="nav-section-name">&hellip;więcej wkrótce</li>
                            </ul>

                            <div id="nav-footer">
                                <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a
                                    href="mailto:zielonabudowa@gmail.com">zielonabudowa@gmail.com</a><br/></span><a
                                    href="https://web.facebook.com/zielonabudowa/" target="_blank"><i
                                    className="fa fa-facebook-square"
                                    aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    href="https://www.instagram.com/zielonabudowa/" target="_blank"><i
                                    className="fa fa-instagram"
                                    aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"><i
                                    className="fa fa-youtube-play" aria-hidden="true"></i></a></p>
                            </div>

                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;