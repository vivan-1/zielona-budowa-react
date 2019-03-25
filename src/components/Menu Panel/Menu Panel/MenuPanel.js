import React from "react";
import {Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

import {sections, portfolio} from "../../../data/constants";
import MenuLink from "../Menu Link/MenuLink";


const menuPanel = (props) => {


        //for the time being don't display any section names
        let classRestauracje = "displayNone";
        let classPrzemyslowe = "displayNone";
        let classDomy = "displayNone";
        let classRenowacje = "displayNone";


        //check displayed project

        let displayedProject = props.match.params.project;


        //create an arrays of section links

        //restauracje

        let restauracje = []; //array holding section links

        if (sections.restauracje) {

            for (let i = 0; i < portfolio.restauracje.length; i++) {

                //take id, image_url, name and tagline from the props
                let {id, name} = portfolio.restauracje[i];
                let url = "/portfolio/restauracje/" + id + "/1"; //create url consisting of section name, link id and view number (1st view)
                //update the array with a planet tile containing the above details
                restauracje.push(<MenuLink
                    id={id}
                    name={name}
                    url={url}
                    project={displayedProject}
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
                przemyslowe.push(<MenuLink
                    id={id}
                    name={name}
                    url={url}
                    project={displayedProject}
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
                domy.push(<MenuLink
                    id={id}
                    name={name}
                    url={url}
                    project={displayedProject}
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
                renowacje.push(<MenuLink
                    id={id}
                    name={name}
                    url={url}
                    project={displayedProject}
                />);
            }

        }


        return (
            <Col xsHidden sm={3} md={2} id="menu-panel">
                <div id="menu-panel-text">
                    <Link to="/">
                        <Image src="/images/logo-big.png" alt="Zielona budowa - logo"
                               id="main-logo" responsive/>
                    </Link>
                    <div id="links">
                        <p className={classRestauracje}>restauracje i&nbsp;hotele:</p>

                        <div>
                            {restauracje.map((link, k) => {
                                return (
                                    <p key={k}>
                                        {link}
                                    </p>
                                )
                            })}
                        </div>

                        <p className={classPrzemyslowe}>obiekty przemysłowe:</p>
                        <div>
                            {przemyslowe.map((link, k) => {
                                return (
                                    <p key={k}>
                                        {link}
                                    </p>
                                )
                            })}
                        </div>

                        <p className={classDomy}>domy i&nbsp;osiedla:</p>

                        <div>
                            {domy.map((link, k) => {
                                return (
                                    <p key={k}>
                                        {link}
                                    </p>
                                )
                            })}
                        </div>

                        <p className={classRenowacje}>renowacje:</p>

                        <div>
                            {renowacje.map((link, k) => {
                                return (
                                    <p key={k}>
                                        {link}
                                    </p>
                                )
                            })}
                        </div>


                        {/*<p className="section-name">&hellip;więcej wkrótce</p>*/}
                    </div>
                    <div id="footer">
                        <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a
                            href="mailto:biuro@zielonabudowa.com.pl">biuro@zielonabudowa.com.pl</a><br/></span><a
                            href="https://web.facebook.com/zielonabudowa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>&nbsp;&nbsp;<a
                            href="https://www.instagram.com/zielonabudowa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>&nbsp;&nbsp;<a
                            href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>&nbsp;&nbsp;<a
                            href="https://twitter.com/ZielonaBudowa" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-twitter-square"></i></a></p>
                    </div>
                </div>
            </Col>
        );
    };


export default menuPanel;