import React, {Component} from "react";
import {portfolio} from "../data/constants";
import {Link} from "react-router-dom";


class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: "",
            project: "",
            view: 0,
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
    }


    //goes to specific url
    goToUrl(url) {

        this.props.history.push(url); //go to the specified url

    }


    //take project details from url
    setDetails() {

        let {section, project, view} = this.props.match.params;

        //take the section and project names as well as view number from the url
        this.setState({section, project, view});

        //create image url based on project name and view number
        this.setState({imageUrl: project + "-" + view});

        //check the index of the project in the potfolio and get appropiate data

        let projectIndex = 0;
        switch (this.state.section) {
            case "restauracje":
                for (let i = 0; i < portfolio.restauracje.length; i++) {
                    if (portfolio.restauracje[i].id === project) {
                        projectIndex = i;
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.restauracje[projectIndex];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        break;
                    }
                }
                break;

            case "przemyslowe":
                for (let i = 0; i < portfolio.przemyslowe.length; i++) {
                    if (portfolio.przemyslowe[i].id === project) {
                        projectIndex = i;
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.przemyslowe[projectIndex];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        break;
                    }
                }
                break;

            case "domy":
                for (let i = 0; i < portfolio.domy.length; i++) {
                    if (portfolio.domy[i].id === project) {
                        projectIndex = i;
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.domy[projectIndex];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        break;
                    }
                }
                break;

            case "renowacje":
                for (let i = 0; i < portfolio.renowacje.length; i++) {
                    if (portfolio.renowacje[i].id === project) {
                        projectIndex = i;
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.renowacje[projectIndex];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        break;
                    }
                }
                break;
        }

        //check if the current frame is the first or last frame
        let isFirstFrame = this.state.view === 1;
        let isLastFrame = this.state.view === this.state.numberOfViews;

        //check if the current frame is a video frame
        let isVideoFrame = this.state.view === this.videoFrame;

        //check if the current frame is a text frame

        let isTextFrame = false;
        for (let i = 0; i < this.state.textFrames.length; i++) {
            if (this.state.textFrames[i] === this.state.view) {
                isTextFrame = true;
            }
        }

        //update the state with the above values

        this.setState({isFirstFrame, isLastFrame, isVideoFrame, isTextFrame});


    }

    componentDidMount() {
        this.setDetails();

    }


    componentWillReceiveProps() {


        this.setDetails();
    }

    render() {
        let display = this.state.section + " " + this.state.project + " " + this.state.view;

        //hide back and next buttons when they are not necessary
        let backButton = this.state.isFirst ? "<div></div>" : <a id="prev-link" href="#"><span
                            aria-hidden="true">&larr;</span> Wstecz</a>;

        let nextButton = this.state.isLast ? "<div></div>" : <a id="next-link" href="#">Dalej <span
                            aria-hidden="true">&rarr;</span></a>;

        return (

            <div>
                <div id="main-panel-container">
                    <div className="view-content">
                        <div id="title-box">
                            <span id="title">coś innego</span><br/>
                            <span id="subtitle">{display}</span>
                        </div>
                    </div>
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