import React from "react";
import {Link} from "react-router-dom";

const menuLink = (props) => {

    //check whether the link should be active
    const linkClass = (props.project === props.id) ? "routerLink activated-link" : "routerLink";

    return (

        <Link to={props.url} className={linkClass}>{props.name}</Link>
    );


};

export default menuLink;