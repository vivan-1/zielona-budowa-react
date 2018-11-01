import React, {Component} from "react";
import {Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

import {sections, portfolio} from "../data/constants";
import MenuLink from "./MenuLink";

class MenuPanel extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    render() {

        //don't display the names of empty sections
        let classRestauracje = sections.restauracje ? "section-name" : "displayNone";
        let classPrzemyslowe = sections.przemyslowe ? "section-name" : "displayNone";
        let classDomy = sections.domy ? "section-name" : "displayNone";
        let classRenowacje = sections.renowacje ? "section-name" : "displayNone";

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
                    name={name}
                    url={url}
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
                    name={name}
                    url={url}
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
                    name={name}
                    url={url}
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
                    name={name}
                    url={url}
                />);
            }

        }

        return (
            <Col xsHidden sm={3} md={2} id="menu-panel">
                <div id="menu-panel-text">
                    <Link to="/">
                        <Image src="/images/logo-big.png" alt="Zielona budowa - logo"
                             id="main-logo" responsive />
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

                        <p className="section-name">&hellip;więcej wkrótce</p>
                    </div>
                    <div id="footer">
                        <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a
                            href="mailto:zielonabudowa@gmail.com">zielonabudowa@gmail.com</a><br/></span><a
                            href="https://web.facebook.com/zielonabudowa/" target="_blank"><i
                            className="fa fa-facebook-square" aria-hidden="true"></i></a>&nbsp;&nbsp;<a
                            href="https://www.instagram.com/zielonabudowa/" target="_blank"><i
                            className="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;<a
                            href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"><i
                            className="fa fa-youtube-play" aria-hidden="true"></i></a></p>
                    </div>
                </div>
            </Col>
        );
    }
}

export default MenuPanel;