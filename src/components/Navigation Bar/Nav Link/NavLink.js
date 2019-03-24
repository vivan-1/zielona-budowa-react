import React from "react";
import {Link} from "react-router-dom";

const navLink = (props) => (
            <li>
                <Link to={props.url} className="page-scroll">{props.name}</Link>
            </li>
        );

export default navLink;