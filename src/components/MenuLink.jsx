import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        //check whether the link should be active
        let linkClass = (this.props.project === this.props.id) ? "routerLink activated-link" : "routerLink";
        // let linkClass = "routerLink";
        return(
                <Link to={this.props.url} className={linkClass}>{this.props.name}</Link>
        );
    }
}

export default MenuLink;