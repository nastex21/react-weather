import React, { Component } from 'react';
import { guidGenerator } from "./generateuniqkey";

export default class City extends Component {

    render(){
        //needed to add city information
        return(
            <div key={guidGenerator()} className="cityInfo">
                <h1 key={guidGenerator()} id="city">{this.props.name}</h1> 
            </div>
        )
    }
}