import React, {Component} from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import DetailedView from "./DetailedView";
import {portfolio, concepts} from "../data/constants";

//Image animation properties to remove greyscale on hover

// const Img = posed.img({
//     visible: {
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 }
//
//         // filter: 'grayscale(0%)',
//         // transition: {
//         //     duration: 400,
//         //     ease: 'easeOut'
//         // }
//     }
// });


class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: "",
            project: "",
            view: 0,
            name: "",
            imageUrl: "",
            textFrame: 0,
            textContent: "",
            fileFrame: 0,
            fileContent: [],
            numberOfViews: 0,
            isFirstFrame: false,
            isLastFrame: false,
            isTextFrame: false,
            isVideoFrame: false,
            isImageFrame: false,
            isFileFrame: false
        };

        this.goToUrl = this.goToUrl.bind(this);
        this.setDetails = this.setDetails.bind(this);
        this.retrieveProjectData = this.retrieveProjectData.bind(this);
        this.checkFrameType = this.checkFrameType.bind(this);


    }


    //goes to specific url
    goToUrl(url) {

        this.props.history.push(url); //go to the specified url

    }

    retrieveProjectData(section, project, view) {

        switch (section) {
            case "restauracje":
                for (let i = 0; i < portfolio.restauracje.length; i++) {

                    if (portfolio.restauracje[i].id === project) {

                        let {name, numberOfViews, textFrame, textContent, fileFrame, fileContent} = portfolio.restauracje[i];
                        this.setState({name, numberOfViews, textFrame, textContent, fileFrame, fileContent});
                        this.checkFrameType(view, numberOfViews, textFrame, fileFrame);
                        break;
                    }
                }
                break;

            case "przemyslowe":
                for (let i = 0; i < portfolio.przemyslowe.length; i++) {
                    if (portfolio.przemyslowe[i].id === project) {
                        let {name, numberOfViews, textFrame, textContent, fileFrame, fileContent} = portfolio.przemyslowe[i];
                        this.setState({name, numberOfViews, textFrame, textContent, fileFrame, fileContent});
                        this.checkFrameType(view, numberOfViews, textFrame, fileFrame);
                        break;
                    }
                }
                break;

            case "domy":
                for (let i = 0; i < portfolio.domy.length; i++) {
                    if (portfolio.domy[i].id === project) {
                        let {name, numberOfViews, textFrame, textContent, fileFrame, fileContent} = portfolio.domy[i];
                        this.setState({name, numberOfViews, textFrame, textContent, fileFrame, fileContent});
                        this.checkFrameType(view, numberOfViews, textFrame, fileFrame);
                        break;
                    }
                }
                break;

            case "renowacje":
                for (let i = 0; i < portfolio.renowacje.length; i++) {
                    if (portfolio.renowacje[i].id === project) {

                        let {name, numberOfViews, textFrame, textContent, fileFrame, fileContent} = portfolio.renowacje[i];
                        this.setState({name, numberOfViews, textFrame, textContent, fileFrame, fileContent});
                        this.checkFrameType(view, numberOfViews, textFrame, fileFrame);
                        break;
                    }
                }
                break;
        }

    }

    checkFrameType(view, numberOfViews, textFrame, fileFrame) {
        //check if the current frame is the first or last frame
        let isFirstFrame = Number(view) === 1;
        let isLastFrame = Number(view) === numberOfViews;

        // //check if the current frame is a video frame
        // let isVideoFrame = Number(view) === videoFrame;

        //check if the current frame is a text frame

        let isTextFrame = Number(view) === textFrame;
        // let isTextFrame = false;
        // for (let i = 0; i < textFrame.length; i++) {
        //     if (textFrame[i] === Number(view)) {
        //         isTextFrame = true;
        //     }
        //
        // }


        //check if the current frame is a file frame
        let isFileFrame = Number(view) === fileFrame;


        //if all the above are false, set the frame as image frame

        let isImageFrame = !(isTextFrame || isFileFrame);


        //update the state with the above values

        this.setState({isFirstFrame, isLastFrame, isTextFrame, isImageFrame, isFileFrame});

    }

    //take project details from url
    setDetails() {

        let {section, project, view} = this.props.match.params;


        //take the section and project names as well as view number from the url
        this.setState({section, project, view});

        //create image url based on project name and view number
        this.setState({imageUrl: "/images/portfolio/" + project + "-" + view + ".jpg"});

        //check the index of the project in the potfolio and get appropiate data
        this.retrieveProjectData(section, project, view);


    }


    componentDidMount() {
        this.setDetails();

    }


    componentWillReceiveProps() {


        // this.setDetails();
    }

    render() {

        // //YouTube video options
        // const opts = {
        //     height: '390',
        //     width: '640',
        //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //         autoplay: 1
        //     }
        // };

        //choose appropriate content depending on the frame type

        let content; //variable holding the displayed content

        //check if the koncepcje screen should be shown

        let isConcepts = this.props.match.path.includes("koncepcje");

        //check if the splash screen should be shown (if section in routing is undefined)
        let isSplash = !isConcepts && (this.props.match.params.section === undefined);

        //boolean telling whether a modal with a video for the koncepcje section should be displayed
        let displayModal = false;

        //html for the modal displaying video; empty div if no modal needs to be shown
        let videoModal = <div></div>;

        //check if a modal with a video for the koncepcje section should be displayed
        if (isConcepts) {

            for (let i = 0; i < concepts.length; i++) {

                if (concepts[i].id === this.props.match.params.video) {
                    displayModal = true; //turn on the modal
                    // videoId = concepts[i].id; //change video id
                    // videoName = concepts[i].name; //change video name
                    // videoUrl = "http://drobnik.5gbfree.com/zielona/" + videoId + ".mpg"; //change video url based on id
                    videoModal = <Route component={props => <DetailedView {...props}/>} />;
                }
            }

        }

        //video frame content
        // content = <div className="view-content">
        //     <div className="iframe-wrapper">
        //         <YouTube
        //             videoId="wxPkxKkHDgQ"
        //             opts={opts}
        //             onReady={this._onReady}
        //         />
        //     </div>
        // </div>;

        if (this.state.isTextFrame) {
            content = <div className="view-content">
                <div className="text-note">
                    {this.state.textContent}
                </div>

            </div>;

        } else if (this.state.isFileFrame) {


            content = <div className="files-panel">
                <h1>pliki pdf do pobrania:</h1>
                {this.state.fileContent.map((fileContent, k) => {
                    return (
                        <p key={k}>
                            <a href={"/files/" + this.state.project + "-" + (k + 1) + ".pdf"} target="_blank"
                               rel="noopener noreferrer">
                                <i className="fas fa-file-pdf"></i>&nbsp;&nbsp;{fileContent}
                            </a>
                        </p>
                    )
                })}

            </div>;

        } else {

            content = <div className="view-content">

                <Image className="gallery-image" src={this.state.imageUrl} alt={this.state.name}/>

            </div>;
        }


        //specify the pager urls
        let backView = Number(this.state.view) - 1;
        let nextView = Number(this.state.view) + 1;

        let backButtonLink = "/portfolio/" + this.state.section + "/" + this.state.project + "/" + backView;
        let nextButtonLink = "/portfolio/" + this.state.section + "/" + this.state.project + "/" + nextView;

        //specify the pager code depending on whether they should be displayed
        let backButton = this.state.isFirstFrame || isSplash ? <div></div> :
            <Link to={backButtonLink} id="prev-link"><span
                aria-hidden="true">&larr;</span> Wstecz</Link>;

        let nextButton = this.state.isLastFrame || isSplash ? <div></div> :
            <Link to={nextButtonLink} id="next-link">Dalej <span
                aria-hidden="true">&rarr;</span></Link>;

        if (isSplash) {
            return (

                <div id="splash-container">
                    <div className="view-content" id="splash-screen">
                        <div id="title-box">
                            <span id="title">zielona budowa</span><br/>
                            <span id="subtitle">pracownia architektoniczna</span>
                            {/*<Image src="/images/background.jpg" id="splash-image"/>*/}
                        </div>
                    </div>
                </div>

            );
        } else if (isConcepts) {


                return (

                    <div id="concepts-container">
                        koncepcje
                        {videoModal}
                    </div>

                );


        } else {
            return (

                <div id="main-panel-wrapper">
                    <div id="main-panel-container">
                        {content}
                    </div>

                    <nav id="main-panel-footer" aria-label="...">
                        <ul className="pager">

                            <li id="prev" className="previous">{backButton}</li>

                            <li id="next" className="next">{nextButton}</li>
                        </ul>
                    </nav>
                </div>
            );
        }
    }
}

export default Viewer;