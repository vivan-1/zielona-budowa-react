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

                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.restauracje[i];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "przemyslowe":
                for (let i = 0; i < portfolio.przemyslowe.length; i++) {
                    if (portfolio.przemyslowe[i].id === project) {
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.przemyslowe[i];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "domy":
                for (let i = 0; i < portfolio.domy.length; i++) {
                    if (portfolio.domy[i].id === project) {
                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.domy[i];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
                        this.checkFrameType(view, numberOfViews, videoFrame, textFrames);
                        break;
                    }
                }
                break;

            case "renowacje":
                for (let i = 0; i < portfolio.renowacje.length; i++) {
                    if (portfolio.renowacje[i].id === project) {

                        let {numberOfViews, videoFrame, videoUrl, textFrames} = portfolio.renowacje[i];
                        this.setState({numberOfViews, videoFrame, videoUrl, textFrames});
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
    let isVideoFrame = view === videoFrame;

    //check if the current frame is a text frame

    let isTextFrame = false;
    for (let i = 0; i < textFrames.length; i++) {
        if (textFrames[i] === view) {
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
        this.setState({imageUrl: project + "-" + view});

        //check the index of the project in the potfolio and get appropiate data
        this.retrieveProjectData(section, project, view);




    }

    componentDidMount() {
        this.setDetails();

    }


    componentWillReceiveProps() {


        this.setDetails();
    }

    render() {
        let display = this.state.section + " " + this.state.project + " " + this.state.view;

        // let display = "isFirstFrame: " +  this.state.isFirstFrame + " view:" + Number(this.state.view) + " isLastFrame: " + this.state.isLastFrame + " numberOfViews: " + this.state.numberOfViews + " imageUrl:" + this.state.imageUrl;
        //hide back and next buttons when they are not necessary

        // let display = "numberOfViews: " + this.state.numberOfViews + " videoFrame: " + this.state.videoFrame + " videoUrl: " + this.state.videoUrl + " textFrames: " + this.state.textFrames;

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