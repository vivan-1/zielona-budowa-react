import React, {Component} from "react";
import ResponsiveEmbed from "react-responsive-embed";
import YouTube from "react-youtube";

import {portfolio} from "../data/constants";
import {Link} from "react-router-dom";


class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: "",
            project: "",
            view: 0,
            name: "",
            imageUrl: "",
            videoUrl: "",
            textFrames: [],
            videoFrame: 0,
            numberOfViews: 0,
            isFirstFrame: false,
            isLastFrame: false,
            isTextFrame: false,
            isVideoFrame: false,
            isImageFrame: false
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

                        let {name, numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.restauracje[i];
                        this.setState({name, numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "przemyslowe":
                for (let i = 0; i < portfolio.przemyslowe.length; i++) {
                    if (portfolio.przemyslowe[i].id === project) {
                        let {name, numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.przemyslowe[i];
                        this.setState({name, numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "domy":
                for (let i = 0; i < portfolio.domy.length; i++) {
                    if (portfolio.domy[i].id === project) {
                        let {name, numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.domy[i];
                        this.setState({name, numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "renowacje":
                for (let i = 0; i < portfolio.renowacje.length; i++) {
                    if (portfolio.renowacje[i].id === project) {

                        let {name, numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.renowacje[i];
                        this.setState({name, numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;
        }

    }

    checkFrameType(view, numberOfViews, videoFrame, textFrames) {
        //check if the current frame is the first or last frame
        let isFirstFrame = Number(view) === 1;
        let isLastFrame = Number(view) === numberOfViews;

        //check if the current frame is a video frame
        let isVideoFrame = Number(view) === videoFrame;

        //check if the current frame is a text frame

        let isTextFrame = false;
        for (let i = 0; i < textFrames.length; i++) {
            if (textFrames[i] === Number(view) - 1) {
                isTextFrame = true;
            }
        }

        //update the state with the above values

        this.setState({isFirstFrame, isLastFrame, isVideoFrame, isTextFrame});
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


        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };


        //choose appropriate content depending on the frame type

        let content;

        console.log("isVideoFrame: ", this.state.isVideoFrame, " isTextFrame: ", this.state.isTextFrame);

        if (this.state.isVideoFrame) {
            content = <div className="view-content">
                <YouTube
                    videoId="wxPkxKkHDgQ"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>;
        } else if (this.state.isTextFrame) {
            content = <div className="view-content">
                <img className="text-note" src={this.state.imageUrl} alt={this.state.name}/>
            </div>;
        } else {
            content = <div className="view-content"><img src={this.state.imageUrl} alt={this.state.name}/></div>;
        }

        //specify the pager urls
        let backView = Number(this.state.view) - 1;
        let nextView = Number(this.state.view) + 1;

        let backButtonLink = "/portfolio/" + this.state.section + "/" + this.state.project + "/" + backView;
        let nextButtonLink = "/portfolio/" + this.state.section + "/" + this.state.project + "/" + nextView;

        //specify the pager code depending on whether they should be displayed
        let backButton = this.state.isFirstFrame ? <div></div> : <Link to={backButtonLink} id="prev-link"><span
            aria-hidden="true">&larr;</span> Wstecz</Link>;

        let nextButton = this.state.isLastFrame ? <div></div> : <Link to={nextButtonLink} id="next-link">Dalej <span
            aria-hidden="true">&rarr;</span></Link>;

        return (

            <div>
                <div id="main-panel-container">
                    <div>{content}</div>
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

export default Viewer;