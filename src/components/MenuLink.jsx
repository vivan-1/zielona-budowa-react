import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                <Link to={this.props.url} className="routerLink">{this.props.name}</Link>
            </p>
        );
    }
}

export default MenuLink;