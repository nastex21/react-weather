import React, { Component } from 'react';

export default class City extends Component {

    render(){
        return(
            <div className="cityInfo">
                <span id="city">{this.props.name}</span>
            </div>
        )
    }
}