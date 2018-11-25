import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import {ScaleLoader} from "react-spinners"; //spinner
import {concepts} from "../data/constants";

class DetailedView extends Component {
constructor(props) {
    super(props);

    this.state = {
        show: true, //specifies whether the detailed view modal should be visible
        // loading: true, //specifies whether the spinner should be visible
    }
}


    render() {

        let videoId = this.props.match.params.video; //video id
        let videoName = ""; //video name
        let videoUrl = ""; //video url based on video id

        //look through the concepts array to check the video name and url
        for (let i = 0; i < concepts.length; i++) {

            if (concepts[i].id === this.props.match.params.video) {
                videoId = concepts[i].id; //change video id
                videoName = concepts[i].name; //change video name
                videoUrl = "http://drobnik.5gbfree.com/zielona/" + videoId + ".mpg"; //change video url based on id
            }
        }


        // let containerClass = ""; //specifies the class of the container holding the main content
        // let loaderClass = ""; //specifies the class of the container holding the spinner

        // if (this.state.loading) {
        //     containerClass = "displayNone"; //hides the modal content when loading
        //     loaderClass = "loaderViewContainer"; //shows the loader when loading
        // } else {
        //     containerClass = "contentContainer"; //shows the modal content when loaded
        //     loaderClass = "displayNone"; //hides the loader when the content has loaded
        // }

        return(
            <div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    dialogClassName="conceptView"

                >

                        <Modal.Header closeButton>
                            <Modal.Title><strong>{videoName}</strong></Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="detailBody">
                            <div className="detailContentContainer">
                                {videoUrl}

                            </div>
                        </Modal.Body>

                </Modal>
        </div>
        );
    }
}

export default DetailedView;