import React, { Component } from 'react';

export default class City extends Component {

    render(){
        console.log(this.props.name);
        return(
            <div className="cityInfo">
                <h1 id="city">{this.props.name}</h1>
            </div>
        )
    }
}