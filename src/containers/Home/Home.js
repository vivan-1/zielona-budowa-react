import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Grid, Row, Image} from "react-bootstrap";
import {FadeLoader} from "react-spinners";

import NavigationBar from "../../components/Navigation Bar/Navigation Bar/NavigationBar";
import MenuPanel from "../../components/Menu Panel/Menu Panel/MenuPanel";
import MainPanel from "../../components/Main Panel/MainPanel";

class Home extends Component {

    constructor(props) {
        super(props);
        // this.updateImagesLoaded = this.updateImagesLoaded.bind(this);
        // this.state = {
        //     loading: true, //specifies whether the spinner should be visible
        //     imagesLoaded: 0, //the number of images that have been loaded
        //     allImages: 4 //the total number of images that need to load before the spinner is hidden
        // }
    }

    // updateImagesLoaded() {
    //
    //     this.setState({imagesLoaded: this.state.imagesLoaded + 1}); //increment the number of loaded images by 1
    //
    //     //if the number of loaded images reaches the number of all images that need to be loaded, hide the spinner
    //     if (this.state.imagesLoaded >= this.state.allImages) {
    //         this.setState({loading: false});
    //     }
    //
    // }

    //set dynamic page title
    componentWillMount() {
        document.title = "Zielona Budowa - pracownia architektoniczna";
    }

    componentDidMount() {
        // this.setState({loading: false}); //hide the spinner
    }

    render() {


        // let containerClass = ""; //specifies the class of the container holding the main content
        // let loaderClass = ""; //specifies the class of the container holding the spinner
        //
        // if (this.state.loading) {
        //     containerClass = "displayNone"; //hides the tile content when loading
        //     loaderClass = "loaderContainer"; //shows the loader when loading
        // } else {
        //     containerClass = "contentContainer"; //shows the tile content when loaded
        //     loaderClass = "displayNone"; //hides the loader when the content has loaded
        // }


        return (

            <div id="main-container" id="app">
                <NavigationBar/>

                <div id="panels">
                    <Route component={props => <MenuPanel {...props}/>}/>

                    <MainPanel/>
                </div>


            </div>

        );
    }
}

export default Home;