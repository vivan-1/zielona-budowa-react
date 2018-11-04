import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

import {sections, portfolio} from "../data/constants";
import NavLink from "./NavLink";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {



        //don't display the names of empty sections
        // let classRestauracje = sections.restauracje ? "" : "displayNone";
        // let classPrzemyslowe = sections.przemyslowe ? "" : "displayNone";
        // let classDomy = sections.domy ? "" : "displayNone";
        // let classRenowacje = sections.renowacje ? "" : "displayNone";
        // let classKoncepcje = sections.koncepcje ? "section-name" : "displayNone";

        //for the time being don't display any section names
        let classRestauracje = "displayNone";
        let classPrzemyslowe = "displayNone";
        let classDomy = "displayNone";
        let classRenowacje = "displayNone";
        let classKoncepcje = "displayNone";


        //create an arrays of section links

        //restauracje

        let restauracje = []; //array holding section links

        if (sections.restauracje) {

            for (let i = 0; i < portfolio.restauracje.length; i++) {

                //take id, image_url, name and tagline from the props
                let {id, name} = portfolio.restauracje[i];
                let url = "/portfolio/restauracje/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                restauracje.push(<NavLink
                    name={name}
                    url={url}
                    id={id}
                />);
            }

        }

        //obiekty przemysłowe

        let przemyslowe = []; //array holding section links

        if (sections.przemyslowe) {

            for (let i = 0; i < portfolio.przemyslowe.length; i++) {

                //take id, image_url, name and tagline from the props
                let {id, name} = portfolio.przemyslowe[i];
                let url = "/portfolio/przemyslowe/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                przemyslowe.push(<NavLink
                    name={name}
                    url={url}
                    id={id}
                />);
            }

        }

        //domy i osiedla

        let domy = []; //array holding section links

        if (sections.domy) {

            for (let i = 0; i < portfolio.domy.length; i++) {

                //take id, image_url, name and tagline from the props
                let {id, name} = portfolio.domy[i];
                let url = "/portfolio/domy/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                domy.push(<NavLink
                    name={name}
                    url={url}
                    id={id}
                />);
            }

        }

        //renowacje

        let renowacje = []; //array holding section links

        if (sections.renowacje) {

            for (let i = 0; i < portfolio.renowacje.length; i++) {

                //take id and name from the portfolio constant
                let {id, name} = portfolio.renowacje[i];
                let url = "/portfolio/renowacje/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                renowacje.push(<NavLink
                    name={name}
                    url={url}
                    id={id}
                />);
            }

        }

        //koncepcje

        let koncepcje = []; //array holding section links

        if (sections.koncepcje) {

            for (let i = 0; i < portfolio.koncepcje.length; i++) {

                //take id and name from the portfolio constant
                let {id, name} = portfolio.koncepcje[i];
                let url = "/portfolio/koncepcje/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                koncepcje.push(<NavLink
                    name={name}
                    url={url}
                    id={id}
                />);
            }

        }


        return (
            <Navbar collapseOnSelect id="top-navbar">
                <div className="container">
                    <Navbar.Header>
                        <Navbar.Toggle/>
                        {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">*/}
                        {/*<span className="sr-only">Toggle navigation</span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*</button>*/}
                        <Navbar.Brand href="#home">
                            <Link to="/">
                                <Image src="/images/logo-small.png" alt="Zielona budowa - logo" id="logo-navbar" responsive />
                            </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse id="navbar">
                        <div id="nav-panel-text">
                            <ul className="nav navbar-nav" id="nav-links">
                                <div className={classRestauracje}>
                                    <li className="nav-section-name">restauracje i&nbsp;hotele:</li>
                                </div>

                                <div>
                                    {restauracje.map((link, k) => {
                                        return (
                                            <p key={k}>
                                                {link}
                                            </p>
                                        )
                                    })}
                                </div>

                                <div className={classPrzemyslowe}>
                                    <li className="nav-section-name">obiekty przemysłowe:</li>
                                </div>

                                <div>
                                    {przemyslowe.map((link, k) => {
                                        return (
                                            <p key={k}>
                                                {link}
                                            </p>
                                        )
                                    })}
                                </div>


                                <div className={classDomy}>
                                    <li className="nav-section-name">domy i&nbsp;osiedla:</li>
                                </div>

                                <div>
                                    {domy.map((link, k) => {
                                        return (
                                            <p key={k}>
                                                {link}
                                            </p>
                                        )
                                    })}
                                </div>

                                <div className={classRenowacje}>
                                    <li className="nav-section-name">renowacje:</li>
                                </div>

                                <div>
                                    {renowacje.map((link, k) => {
                                        return (
                                            <p key={k}>
                                                {link}
                                            </p>
                                        )
                                    })}
                                </div>

                                <div className={classKoncepcje}>
                                    <li className="nav-section-name">koncepcje:</li>
                                </div>

                                <div>
                                    {koncepcje.map((link, k) => {
                                        return (
                                            <p key={k}>
                                                {link}
                                            </p>
                                        )
                                    })}
                                </div>

                                {/*<li className="nav-section-name">&hellip;więcej wkrótce</li>*/}
                            </ul>

                            <div id="nav-footer">
                                <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a
                                    href="mailto:biuro@zielonabudowa.com.pl">biuro@zielonabudowa.com.pl</a><br/></span><a
                                    href="https://web.facebook.com/zielonabudowa/" target="_blank" rel="noopener noreferrer"><i
                                    className="fa fa-facebook-square"
                                    aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    href="https://www.instagram.com/zielonabudowa/" target="_blank" rel="noopener noreferrer"><i
                                    className="fa fa-instagram"
                                    aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"><i
                                    className="fa fa-youtube-play" aria-hidden="true" rel="noopener noreferrer"></i></a></p>
                            </div>

                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;