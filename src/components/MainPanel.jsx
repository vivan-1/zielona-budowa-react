import React, {Component} from "react";


class MainPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
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
        );
    }
}

export default MainPanel;