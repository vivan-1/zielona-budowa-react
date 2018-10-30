import React, {Component} from "react";
import {Image} from "react-bootstrap";
import {FadeLoader} from "react-spinners";

class Home extends Component {

    constructor(props) {
        super(props);
        // this.updateImagesLoaded = this.updateImagesLoaded.bind(this);
        this.state = {
            loading: true, //specifies whether the spinner should be visible
            imagesLoaded: 0, //the number of images that have been loaded
            allImages: 4 //the total number of images that need to load before the spinner is hidden
        }
    }

    updateImagesLoaded() {

        this.setState({imagesLoaded: this.state.imagesLoaded + 1}); //increment the number of loaded images by 1

        //if the number of loaded images reaches the number of all images that need to be loaded, hide the spinner
        if (this.state.imagesLoaded >= this.state.allImages) {
            this.setState({loading: false});
        }

    }

    //set dynamic page title
    componentWillMount() {
        document.title = "Zielona Budowa - pracownia architektoniczna";
    }

    componentDidMount() {
        // this.setState({loading: false}); //hide the spinner
    }

    render() {


        let containerClass = ""; //specifies the class of the container holding the main content
        let loaderClass = ""; //specifies the class of the container holding the spinner

        if (this.state.loading) {
            containerClass = "displayNone"; //hides the tile content when loading
            loaderClass = "loaderContainer"; //shows the loader when loading
        } else {
            containerClass = "contentContainer"; //shows the tile content when loaded
            loaderClass = "displayNone"; //hides the loader when the content has loaded
        }


        return (
            <div>
                
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

                
                <div className="container-fluid" id="main-container">

                    
                    <div className="hidden-xs col-sm-2" id="menu-panel">
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
                    </div>

                    <div className="col-sm-10 container-fluid" id="main-panel">

                        <div id="main-panel-container">

                        </div>

                        <nav id="main-panel-footer" aria-label="...">
                            <ul className="pager">
                                <li id="prev" className="previous"><a id="prev-link" href="#"><span aria-hidden="true">&larr;</span> Wstecz</a></li>
                                <li id="next" className="next"><a id="next-link" href="#">Dalej <span aria-hidden="true">&rarr;</span></a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;