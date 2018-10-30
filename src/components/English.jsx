import React, {Component} from "react";
import {Image} from "react-bootstrap";
import {FadeLoader} from "react-spinners";

class English extends Component {

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
        document.title = "Mulberry English - Język angielski dla firm i osób indywidualnych - Katarzyna Łasocha-Nowak - Poznań";
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
                <div className={loaderClass}>
                    <FadeLoader
                        color={"#9d0059"}
                        loading={this.state.loading}
                    />
                </div>
                <div className={containerClass}>
                    <div className="dynamic-box">Mulberry English</div>
                    <Image
                        src="images/background.jpg"
                        alt="icon"
                        onLoad={this.updateImagesLoaded.bind(this)}

                    />
                    <Image
                        src="images/image_4.jpg"
                        alt="icon"
                        onLoad={this.updateImagesLoaded.bind(this)}

                    />
                    <Image
                        src="images/image_5.jpg"
                        alt="icon"
                        onLoad={this.updateImagesLoaded.bind(this)}
                    />
                    <Image src="images/image_6.jpg"
                           alt="icon"
                           onLoad={this.updateImagesLoaded.bind(this)}
                    />
                    <Image src="images/portrait2.jpg"
                           alt="icon"
                           onLoad={this.updateImagesLoaded.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default English;