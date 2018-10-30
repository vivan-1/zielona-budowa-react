import React, {Component} from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-default navbar-fixed-top visible-xs" id="top-navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="page-scroll navbar-brand" id="nav-link-0" href="#home"><img className="img-responsive" src="images/logo-small.png" alt="Zielona budowa - logo" id="logo-navbar"></img></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <div id="nav-panel-text">
                            <ul className="nav navbar-nav" id="nav-links">
                                <li className="nav-section-name">restauracje i&nbsp;hotele:</li>

                                <li className="nav-section-name">obiekty przemysłowe:</li>
                                <li><a href="#" className="page-scroll" id="nav-link-2-0">malarnia proszkowa</a></li>

                                <li className="nav-section-name">domy i&nbsp;osiedla:</li>
                                <li><a href="#" className="page-scroll" id="nav-link-3-0">dom w&nbsp;porębie</a></li>
                                <li className="nav-section-name">renowacje:</li>
                                <li><a href="#" className="page-scroll" id="nav-link-5-0">sportowa 20</a></li>
                                <li className="nav-section-name">&hellip;więcej wkrótce</li>
                            </ul>

                            <div id="nav-footer">
                                <p>zielona budowa<br/><span className="small-text">+48 664 142 159<br/><a href="mailto:zielonabudowa@gmail.com">zielonabudowa@gmail.com</a><br/></span><a href="https://web.facebook.com/zielonabudowa/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/zielonabudowa/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/channel/UC8Uneg0JGEC2rH0P3AmWTvg" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;