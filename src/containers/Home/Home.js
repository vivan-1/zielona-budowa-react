import React, {Component} from "react";
import {Route} from "react-router-dom";
import {FadeLoader} from "react-spinners";

import NavigationBar from "../../components/Navigation Bar/Navigation Bar/NavigationBar";
import MenuPanel from "../../components/Menu Panel/Menu Panel/MenuPanel";
import MainPanel from "../../components/Main Panel/MainPanel";


//to be added: spinner showing based on the loading state
const home = props => {


        return (

            <div id="main-container">
                <NavigationBar/>

                <div id="panels">
                    <Route component={props => <MenuPanel {...props}/>}/>

                    <MainPanel/>
                </div>


            </div>

        );
    };


export default home;