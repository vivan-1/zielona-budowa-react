import React, {Component} from "react";


class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: "",
            project: "",
            view: 0
        }

        this.goToUrl = this.goToUrl.bind(this);
    }


    //goes to specific url
    goToUrl(url) {

        this.props.history.push(url); //go to the specified url

    }



    //take project details from url
    setDetails() {

        let {section, project, view} = this.props.match.params;

        this.setState({section, project, view});

    }

    componentDidMount() {
        this.setDetails();

    }


    componentWillReceiveProps() {


            this.setDetails();
    }

    render() {
        let display = this.state.section + " " + this.state.project + " " + this.state.view;
        return(

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
                        <li id="prev" className="previous"><a id="prev-link" href="#"><span aria-hidden="true">&larr;</span> Wstecz</a></li>
                        <li id="next" className="next"><a id="next-link" href="#">Dalej <span aria-hidden="true">&rarr;</span></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Viewer;