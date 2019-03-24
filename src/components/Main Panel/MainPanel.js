import React from "react";
import {Route} from "react-router-dom";

import Viewer from "../../containers/Viewer/Viewer";


const mainPanel = (props) => (
            <div id="main-panel">
                    <Route component={props => <Viewer {...props}/>} />
            </div>
        );

export default mainPanel;