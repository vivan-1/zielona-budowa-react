import React, {Component} from "react";
import {Col} from "react-bootstrap";

class MenuPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Col xsHidden sm={3} md={2} id="menu-panel">
                <div id="menu-panel-text">
                    <a href="#" id="link-0"><img className="img-responsive" src="images/logo-big.png" alt="Zielona budowa - logo" id="main-logo"></img></a>
                    <div id="links">
                        <p className="section-name">restauracje i&nbsp;hotele:</p>

                        <p className="section-name">obiekty przemysłowe:</p>
                        <p><a href="#" className="menu-panel-link" id="link-2-0">malarnia proszkowa</a></p>

                        <p className="section-name">domy i&nbsp;osiedla:</p>
                        <p><a href="#" className="menu-panel-link" id="link-3-0">dom w&nbsp;porębie</a></p>
                        <p className="section-name">renowacje:</p>
                        <p><a href="#" className="menu-panel-link" id="link-5-0">sportowa 20</a></p>
                        <p className="section-name">&hellip;więcej wkrótce</p>
                    </div>
                    <div id="footer">
                        <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a href="mailto:zielonabudowa@gmail.com">zielonabudowa@gmail.com</a><br/></span><a href="https://web.facebook.com/zielonabudowa/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>&nbsp;&nbsp;<a href="https://www.instagram.com/zielonabudowa/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;<a href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></p>
                    </div>
                </div>
            </Col>
        );
    }
}

export default MenuPanel;