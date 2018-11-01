import React, {Component} from "react";
import {sections, portfolio} from "../data/constants";


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
            isVideoFrame: false
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


        /*
        *
            videoUrl: "",
            textFrames: [],
            videoFrame: 0,
            maxViews: 0,
            isFirstFrame: false,
            isLastFrame: false,
            isTextFrame: false,
            isVideoFrame: false
            ///////

            id: 'malarnia',
            name: 'malarnia proszkowa',
            numberOfViews: 10,
            videoFrame: 5,
            videoUrl: "https://www.youtube.com/watch?v=wxPkxKkHDgQ&t=3s",
            textFrames: [9, 10]
        * */


    }

    componentDidMount() {
        this.setDetails();

    }


    componentWillReceiveProps() {


        this.setDetails();
    }

    render() {
        let display = this.state.section + " " + this.state.project + " " + this.state.view;
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
                        <li id="prev" className="previous"><a id="prev-link" href="#"><span
                            aria-hidden="true">&larr;</span> Wstecz</a></li>
                        <li id="next" className="next"><a id="next-link" href="#">Dalej <span
                            aria-hidden="true">&rarr;</span></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Viewer;