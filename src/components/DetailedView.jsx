import React, {Component} from "react";
import {concepts} from "../data/constants";

class DetailedView extends Component {



    render() {

        let videoId = this.props.match.params.video; //video id
        let videoName = ""; //video name
        let videoUrl = ""; //video url based on video id

        for (let i = 0; i < concepts.length; i++) {

            if (concepts[i].id === this.props.match.params.video) {
                videoId = concepts[i].id; //change video id
                videoName = concepts[i].name; //change video name
                videoUrl = "http://drobnik.5gbfree.com/zielona/" + videoId + ".mpg"; //change video url based on id
            }
        }

        return(
            <div>
                {videoId}
        </div>
        );
    }
}

export default DetailedView;